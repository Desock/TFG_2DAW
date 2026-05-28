import { getFooter, STRAPI_URL } from "@/lib/strapi";
import NavBar from "../_components/navBar";
import { Footer } from "../_components/footer";

const footer = await getFooter();
const myFooter = footer;

export default function Circuits({
  data,
}: {
  readonly data: Array<{
    documentId: string;
    name: string;
    lenghMeters: number;
    track_description: string;
    layout_image: {
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

          {data.map((circuit) => {
            const image = circuit.layout_image;

            const imageURL = image?.url
              ? image.url.startsWith("http")
                ? image.url
                : `${STRAPI_URL}${image.url}`
              : "/placeholder.png";

            return (
              <a
                key={circuit.documentId}
                href={`/circuits/${circuit.documentId}`}
                className="group block mt-10 rounded-xl border text-black border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="aspect-video overflow-hidden ">
                  <img
                    src={imageURL}
                    alt={image?.alternativeText || `${circuit.name}`}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-red-500 transition">
                    {circuit.name}
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
