import { connectStrapi } from "@/lib/strapi";
import { homepageBlocksMap } from "@/components/homepage/blocks-map";
import Image from "next/image";


interface StrapiBlock {
  __component: string;
  [key: string]: unknown;
}

export default async function Home() {
  const homepage = await connectStrapi("/api/homepage?populate[blocks][populate]=*");

    const logo = homepage.data.logo;
    const mainTitle = homepage.data.MainTitle;
    const subTitle = homepage.data.SubTitle;
    const blocks = homepage.data.blocks as StrapiBlock[];

  return (
    <main className="flex flex-col gap-24 py-16 max-w-7xl mx-auto px-6">
         <header className="text-center space-y-4 bg-red-400">
        {logo && (
          <Image
            src={logo.url}
            alt="Logo"
            className="mx-auto w-32 h-auto"
          />
        )}
        <h1 className="text-4xl font-bold text-black">{mainTitle}</h1>
        <p className="text-xl text-gray-700">{subTitle}</p>
      </header>
      {blocks.map((block, index) => {
        const Component = homepageBlocksMap[block.__component];
        if (!Component) return null;

        return <Component key={index} data={block} />;
      })}
    </main>
  );
}
