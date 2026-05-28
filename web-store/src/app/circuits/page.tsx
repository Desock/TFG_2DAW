import { STRAPI_URL } from "@/lib/strapi";
import Circuits from "./circuits";

export default async function CircuitPage() {
  const res = await fetch(`${STRAPI_URL}/api/circuits?populate=*`, {
    cache: "no-store",
  });

  const json = await res.json();
  const data = json.data;

  return <Circuits data={data} />;
}
