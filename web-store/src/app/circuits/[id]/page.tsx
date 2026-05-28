import { getFooter, STRAPI_URL } from "@/lib/strapi";
import Link from "next/link";
import { Footer } from "@/app/_components/footer";

const footer = await getFooter();
const myFooter = footer;

export default async function CircuitDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`${STRAPI_URL}/api/circuits/${id}?populate=*`, {
    cache: "no-store",
  });

  const json = await res.json();
  const circuit = json.data;

  if (!circuit) {
    return <div className="p-10 text-center">Circuito no encontrado</div>;
  }

  const image = circuit.layout_image;

  const imageURL = image?.url
    ? image.url.startsWith("http")
      ? image.url
      : `${STRAPI_URL}${image.url}`
    : "/placeholder.png";

  return (
    <section className=" py-16">
      <div className="mx-auto mt-10 max-w-6xl px-6">

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">

          {/* IMAGE */}
          <div className="relative h-95 md:h-120 overflow-hidden">
            <img
              src={imageURL}
              alt={circuit.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

            <h1 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {circuit.name} 
            </h1>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-10">

            {/* SPECS GRID */}
            <div className="grid items-baseline gap-6 mb-10">
              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                <p className="text-sm text-gray-500">Circuito</p>
                <p className="text-xl text-black font-semibold">{circuit.name}</p>
              </div>

              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                <p className="text-sm text-gray-500">Distance</p>
                <p className="text-xl text-black font-semibold">{circuit.lenghMeters}KM</p>
              </div>

              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-xl text-black font-semibold">{circuit.track_description}</p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Setup para el {circuit.name}. Configurado para ser estable en curva rapida y rapido a la salida de curva lenta.
            </p>

            {/* CTA */}
            <div className="flex justify-start">
              <Link
                href="/circuits"
                className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold text-lg shadow-md hover:bg-red-700 transition"
              >
                Volver al listado
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Footer data={{ ...myFooter }}></Footer>
    </section>
    

  );
}
