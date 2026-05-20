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
        },
        "homepage.featured-cars": {
          "populate": {
            "fields": [
              "title",
              "description",
              "Label",
              "urlBundle"
            ],
            "carImage": {
              "fields": [
                "url",
                "alternativeText"
              ]
            }
          }
        },
        "homepage.featured-circuits": {
          "populate": {
            "fields": [
              "title",
              "description",
              "Label",
              "urlBundle"
            ],
            "trackImage": {
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

export async function getFooter() {
  const response = await connectStrapi(`/api/footer`);
  return response?.data;
}

export async function getHeader() {
  const response = await connectStrapi(`/api/homepage?populate=*`);
  return response?.data;
}

// export async function getSetups() {
//   const response = await connectStrapi(`/api/setups?populate=*`);
//   return response?.data;
// }


export async function getHomePage() {
    const query = qs.stringify(QUERY_HOMEPAGE);
    const response = await connectStrapi(`/api/homepage?${query}`);
    return response?.data;
}


export async function connectStrapi(url: string) {
  'use cache'
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

export async function registerUserService (userData: object) {
  const url = `${STRAPI_URL}/api/auth/local/register`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

export async function loginUserService (userData: object) {
  const url = `${STRAPI_URL}/api/auth/local`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    // console.log(data)
    return data
  } catch (error) {
    console.error('Error login user:', error)
    throw error
  }
}