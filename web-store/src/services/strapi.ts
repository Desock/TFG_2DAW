const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function getHomepageData() {
  const res = await fetch(`${STRAPI_URL}/api/homepage?populate=*`, {
    next: { revalidate: 60 }
  });
  
  if (!res.ok) throw new Error('Error al cargar la Homepage');
  const { data } = await res.json();
  return data;
}