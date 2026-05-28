import { STRAPI_URL } from "@/lib/strapi";
import Cars from "./cars";

export default async function CarsPage() {
  const res = await fetch(`${STRAPI_URL}/api/cars?populate=*`, {
    cache: "no-store",
  });

  const json = await res.json();
  const data = json.data;

  return <Cars data={data} />;
}
