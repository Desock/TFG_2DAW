const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
// const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function connectStrapi(url: string) {
    try {
        const response = await fetch(`${STRAPI_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}