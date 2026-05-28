import { getFooter, STRAPI_URL } from "@/lib/strapi";
import Link from "next/link";
import { Footer } from "@/app/_components/footer";

const footer = await getFooter();
const myFooter = footer;

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`${STRAPI_URL}/api/cars/${id}?populate=*`, {
    cache: "no-store",
  });

  const json = await res.json();
  const car = json.data;

  if (!car) {
    return <div className="p-10 text-center">Coche no encontrado</div>;
  }

  const image = car.car_image;

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
          <div className="relative h-[380px] md:h-[480px] overflow-hidden">
            <img
              src={imageURL}
              alt={car.brand + ' ' + car.model}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <h1 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {car.brand} <span className="text-red-500">{car.model}</span>
            </h1>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-10">

            {/* SPECS GRID */}
            <div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                <p className="text-sm text-gray-500">Marca</p>
                <p className="text-xl text-black font-semibold">{car.brand}</p>
              </div>

              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                <p className="text-sm text-gray-500">Modelo</p>
                <p className="text-xl text-black font-semibold">{car.model}</p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Setup para el {car.brand}. Configurado para ser estable en curva rapida y rapido a la salida de curva lenta.
            </p>

            {/* CTA */}
            <div className="flex justify-start">
              <Link
                href="/cars"
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
