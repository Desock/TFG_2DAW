import { getHomePage } from "@/lib/strapi";
import { HeroBanner } from "@/components/heroBanner";
import { AuthCTA } from "@/components/auth-cta";





export default async function Home() {
    const homepage = await getHomePage();

    const { MainTitle, SubTitle } = homepage;
    const heroBanner = homepage.blocks.find((b: { __component: string; }) => b.__component === "blocks.hero-banner");
    const authCta = homepage.blocks.find((b: { __component: string; }) => b.__component === "homepage.auth-cta");

    return (
        <main className="container mx-auto py-6">
            <div className="flex flex-col justify-center items-center bg-linear-to-l from-red-600 from-30% to-red-400 to-60% mb-5">
                <h1 className="text-6xl font-black bg-linear-to-r from-black via-gray-500 to-white bg-clip-text text-transparent">{MainTitle}</h1>
                <p className="text-gray-700 font-bold">{SubTitle}</p>
            </div>
            <HeroBanner data={{ ...heroBanner }}></HeroBanner>
            <AuthCTA data={{ ...authCta }}></AuthCTA>
        </main>
    )

}
