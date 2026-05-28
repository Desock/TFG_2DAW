import { STRAPI_URL } from "@/lib/strapi";

export default async function CarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("PARAMS:", params);

  const res = await fetch(`${STRAPI_URL}/api/cars/${params.id}?populate=*`, {
    cache: "no-store",
  });

  console.log("STATUS:", res.status);

  const json = await res.json();
  console.log("JSON recibido:", json);

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
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold mb-6">
          {car.brand} {car.model}
        </h1>

        <img
          src={imageURL}
          alt={image?.alternativeText || `${car.brand} ${car.model}`}
          className="w-full rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg text-gray-700">
          Información detallada del coche próximamente...
        </p>
      </div>
    </section>
  );
}
