

interface HeroVideoProps {
  title?: string;
  subtitle?: string;
  source?: 'URL' | 'File';
  url?: string;
  fileUrl?: string;
  opacity?: number;
}

export default function HeroVideo({ 
  title = "SETUPS 4 NEWBIES", 
  subtitle = "Learn how to be fast", 
  source = "URL", 
  url = "https://www.youtube.com/watch?v=P08CyfQXs2Q", 
  fileUrl = "", 
  opacity = 50 
}: HeroVideoProps) {
  
  const safeOpacity = typeof opacity === 'number' ? opacity / 100 : 0.5;


  const getEmbedUrl = (videoUrl: string) => {
    if (!videoUrl) return "";
    
   
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const videoId = videoUrl.split("v=")[1] || videoUrl.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`;
    }
    
    return videoUrl;
  };

  const videoSrc = source === 'File' ? fileUrl : getEmbedUrl(url);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
     
      <div 
        className="absolute inset-0 z-10 bg-black pointer-events-none" 
        style={{ opacity: safeOpacity }} 
      />
      
    
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">{title}</h1>
        <p className="text-xl md:text-2xl mt-4 max-w-2xl opacity-90">{subtitle}</p>
      </div>

      
      {videoSrc && (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <iframe
            src={videoSrc}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ minWidth: '100%', minHeight: '100%' }}
            title="Hero Video Background"
          />
        </div>
      )}
    </section>
  );
}