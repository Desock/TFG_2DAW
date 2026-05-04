import { connectStrapi } from "@/lib/strapi";

export default async function Home() {
    const strapiData = await connectStrapi('/api/homepage');
    const { MainTitle, SubTitle} = strapiData.data;

    return (
        <main className="container mx-auto py-6">
            <h1 className="text-3xl font-bold text-amber-50">{MainTitle}</h1>
            <p className="text-white">{SubTitle}</p>
        </main>
    )
}