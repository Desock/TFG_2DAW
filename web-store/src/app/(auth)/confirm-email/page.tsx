"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { STRAPI_URL } from "@/lib/strapi";

export default function ConfirmEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"confirming" | "success" | "error">("confirming");
  
  // Referencia para evitar doble ejecución en modo estricto
  const initialized = useRef(false);

  useEffect(() => {
    // 1. Extraemos el token
    const token = searchParams.get("confirmation");

    // 2. Definimos la función de validación
    const performConfirmation = async (tokenValue: string | null) => {
      // Si no hay token, marcamos error y salimos
      if (!tokenValue) {
        setStatus("error");
        return;
      }

      try {
        const response = await fetch(
          `${STRAPI_URL}/api/auth/email-confirmation?confirmation=${tokenValue}`
        );

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("jwt", data.jwt);
          setStatus("success");
          setTimeout(() => router.push("/"), 2500);
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Detalle del error en la confirmación:", err);
        setStatus("error");
      }
    };

    // 3. Ejecutamos la lógica solo una vez
    if (!initialized.current) {
      initialized.current = true;
      
      // Usamos un timeout de 0 para asegurar que la ejecución ocurra 
      // DESPUÉS de que el componente haya terminado de renderizar.
      setTimeout(() => {
        performConfirmation(token);
      }, 0);
    }
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {status === "confirming" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Validando enlace de confirmación...</p>
        </div>
      )}

      {status === "success" && (
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
          <h1 className="text-2xl font-bold text-gray-800">¡Cuenta activada!</h1>
          <p className="text-gray-600 mt-2">Tu email ha sido validado correctamente. En unos segundos entrarás a la tienda.</p>
        </div>
      )}

      {status === "error" && (
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-red-100 text-center">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✕</div>
          <h1 className="text-2xl font-bold text-gray-800">Error de validación</h1>
          <p className="text-gray-600 mt-2">El enlace ha caducado, es inválido o ya fue utilizado anteriormente.</p>
          <button 
            onClick={() => router.push("/login")}
            className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Volver al inicio de sesión
          </button>
        </div>
      )}
    </div>
  );
}