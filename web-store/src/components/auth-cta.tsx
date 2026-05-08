import { STRAPI_URL } from "@/lib/strapi";
// import Image from "next/image";


const styles = {
    header: "relative h-[600px] overflow-hidden mt-2",
    backgroundImage: "absolute inset-0 object-cover w-full h-full",
    overlay: "relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/30",
    title: "text-4xl font-bold md:text-5xl lg:text-6xl",
    description: "mt-4 text-lg md:text-xl lg:text-2xl",
    loginLabel: "text-gray-300",
    registerLabel: "text-cyan-300",
    button: "mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-300 transition-colors",
};

export function AuthCTA({ data }: {
    readonly data: {
        title: string, description: string, loginLabel: string,
        loginURL: string, registerLabel: string, registerURL: string, image: { url: string, alternativeText: string }}}) {
    if (!data) return null;
    const { title, description, loginLabel, loginURL, registerLabel, registerURL } = data;
   


    const imageURL = data.image?.url.startsWith('http') ? data.image.url : `${STRAPI_URL}${data.image.url}`;
            
    return (
        <header className={styles.header}>
                <img
                    src={imageURL}
                    alt={data.image.alternativeText}
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
                <p className={styles.description}>{description}</p>
                <a className={styles.button} href={loginURL}>{loginLabel}</a>
                <a className={styles.button} href={registerURL}>{registerLabel}</a>
            </div>
        </header>
    )
}