import { STRAPI_URL } from "@/lib/strapi";
import Image from "next/image";

const styles = {
    header: "relative h-[600px] overflow-hidden",
    backgroundImage: "absolute inset-0 object-cover w-full h-full",
    overlay: "relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/30",
    title: "text-4xl font-bold md:text-5xl lg:text-6xl",
    subtitle: "mt-4 text-lg md:text-xl lg:text-2xl",
    ctaLabel: "text-gray-300",
    button: "mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-300 transition-colors",
};



export function HeroBanner({ data } : { readonly data: { title: string, subtitle: string, ctaLabel: string, 
    ctaURL: string, backgroundImg: {url: string, alternativeText: string}}}) {
    if (!data) return null;

    const { title, subtitle, ctaLabel, ctaURL } = data;

    const imageURL = data.backgroundImg?.url.startsWith('http') ? data.backgroundImg.url : `${STRAPI_URL}${data.backgroundImg.url}`;

    return (
        <header className={styles.header}>
            <Image
                src={imageURL} 
                alt="background" 
                className={styles.backgroundImage}
                height={1080}
                width={1920}
                style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                }}
            />
            <div className={styles.overlay}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <a className={styles.button} href={ctaURL}>{ctaLabel}</a>
            </div>
        </header>
    )
}