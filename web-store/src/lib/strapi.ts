import qs from 'qs';

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const QUERY_HOMEPAGE = {
  "populate": {
    "blocks": {
      "on": {
        "blocks.hero-banner": {
          "populate": {
            "fields": [
              "title",
              "subtitle",
              "ctaLabel",
              "ctaURL"
            ],
            "backgroundImg": {
              "fields": [
                "url",
                "alternativeText"
              ]
            }
          }
        },
        "homepage.auth-cta": {
          "populate": {
            "fields": [
              "title",
              "description",
              "loginLabel",
              "loginURL",
              "registerLabel",
              "registerURL"
            ],
            "image": {
              "fields": [
                "url",
                "alternativeText"
              ]
            }
          }
        }
      }
    }
  }
}


export async function getHomePage() {
    const query = qs.stringify(QUERY_HOMEPAGE);
    const response = await connectStrapi(`/api/homepage?${query}`);
    return response?.data;
}


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