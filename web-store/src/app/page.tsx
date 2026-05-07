import { getHomePage, getFooter, getHeader } from "@/lib/strapi";
import { HeroBanner } from "@/components/heroBanner";
import { AuthCTA } from "@/components/auth-cta";
import { FeaturedCars } from "@/components/featured-cars";
import { FeaturedCircuits } from "@/components/featured-circuits";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";



export default async function Home() {
    const homepage = await getHomePage();
    const footer = await getFooter();
    const header = await getHeader();

    const myHeader = header;
    const myFooter = footer;
    const heroBanner = homepage.blocks.find((b: { __component: string; }) => b.__component === "blocks.hero-banner");
    const authCta = homepage.blocks.find((b: { __component: string; }) => b.__component === "homepage.auth-cta");
    const featuredCars = homepage.blocks.find((b: { __component: string; }) => b.__component === "homepage.featured-cars");
    const featuredCircuits = homepage.blocks.find((b: { __component: string; }) => b.__component === "homepage.featured-circuits");

    return (
        <main className="container mx-auto py-6">
            <Header data={{ ...myHeader }}></Header>
            <HeroBanner data={{ ...heroBanner }}></HeroBanner>
            <AuthCTA data={{ ...authCta }}></AuthCTA>
            <FeaturedCars data={{ ...featuredCars }}></FeaturedCars>
            <FeaturedCircuits data={{ ...featuredCircuits }}></FeaturedCircuits>
            <Footer data={{ ...myFooter }}></Footer>
        </main>
    )

}
