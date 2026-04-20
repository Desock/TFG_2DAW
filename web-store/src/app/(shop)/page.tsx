import { getHomepageData } from "@/services/strapi";
import HeroVideo from "@/components/blocks/heroVideo";

export default async function HomePage() {
  const data = await getHomepageData();
  
 
  const { 
    MainTitle, 
    Subtitle, 
    VideoSource, 
    VideoURL, 
    VideoFile, 
    OverlayOpacity 
  } = data;

  return (
    <main>
      <HeroVideo 
        title={MainTitle}
        subtitle={Subtitle}
        source={VideoSource}
        url={VideoURL}
        fileUrl={VideoFile?.url} 
        opacity={OverlayOpacity}
      />
      
    </main>
  );
}