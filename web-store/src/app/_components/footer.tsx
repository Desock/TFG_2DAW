// import { STRAPI_URL } from "@/lib/strapi";



export function Footer({ data } : { readonly data: { text: string, copyright: string }}) {
    if (!data) return null;

    const { text, copyright } = data;

    // const imageURL = data.trackImage?.url.startsWith('http') ? data.trackImage.url : `${STRAPI_URL}${data.trackImage.url}`;

    return (
        <footer className="relative overflow-hidden bg-neutral-900 mt-10">
            <div className="w-full max-w-5xl py-10 mx-auto lg:pt-16 flex justify-between">
                <p className="text-sm text-red-400">{text}</p>
                <p className="text-sm text-red-400">{copyright}</p>
            </div>
        </footer>
    )
}