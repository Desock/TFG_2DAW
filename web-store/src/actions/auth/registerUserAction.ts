"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SignupFormSchema, type FormState } from "@/validations/auth";
import { registerUserService } from "@/lib/strapi";

const cookieConfig = {
  maxAge: 60 * 60 * 24 * 7, // 1 semana
  path: "/",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function registerUserAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log("Hello from Register User Action");

  const fields = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
    email: formData.get("email") as string,
  };

  // 1. Validación con Zod
  const validatedFields = SignupFormSchema.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);

    return {
      success: false,
      message: "Validation error",
      strapiErrors: null,
      zodErrors: flattenedErrors.fieldErrors,
      data: fields,
    };
  }

  // 2. Llamada a Strapi
  const response = await registerUserService(validatedFields.data);

  if (!response || response.error) {
    return {
      success: false,
      message: "Registration error",
      strapiErrors: response?.error,
      zodErrors: null,
      data: fields,
    };
  }

  // 3. Guardar JWT en cookie HTTP-only
  const cookieStore = await cookies();
  cookieStore.set("jwt", response.jwt, cookieConfig);

  // 4. Redirigir al dashboard
  redirect("/dashboard");
}
