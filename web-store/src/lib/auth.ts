import { cookies } from "next/headers";
import { STRAPI_URL } from "./strapi";

export async function getCurrentUser() {
  const jwt = (await cookies()).get("jwt")?.value;

  if (!jwt) return null;

  const res = await fetch(`${STRAPI_URL}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}
