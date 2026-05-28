import { getFooter, STRAPI_URL } from "@/lib/strapi";
import NavBar from "../_components/navBar";
import { Footer } from "../_components/footer";

const footer = await getFooter();
const myFooter = footer;

export default function Cars({
  data,
}: {
  readonly data: Array<{
    documentId: string;
    brand: string;
    model: string;
    car_image: {
      url: string;
      alternativeText: string | null;
    } | null;
  }>;
}) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-8 antialiased md:py-12">
      <NavBar />

      <div className="m-10 max-w-8xl justify-center px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">

          {data.map((car) => {
            const image = car.car_image;

            const imageURL = image?.url
              ? image.url.startsWith("http")
                ? image.url
                : `${STRAPI_URL}${image.url}`
              : "/placeholder.png";

            return (
              <a
                key={car.documentId}
                href={`/cars/${car.documentId}`}
                className="group block mt-10 rounded-xl border text-black border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="aspect-video overflow-hidden ">
                  <img
                    src={imageURL}
                    alt={image?.alternativeText || `${car.brand} ${car.model}`}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-red-500 transition">
                    {car.brand} {car.model}
                  </h3>
                </div>
              </a>
            );
          })}

        </div>
      </div>
      <Footer data={{ ...myFooter }}></Footer>
    </section>
  );
}
