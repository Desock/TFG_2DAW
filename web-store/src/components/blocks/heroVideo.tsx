// components/blocks/heroVideo.tsx
interface HeroVideoProps {
  title: string;
  subtitle?: string;
  fileUrl?: string;
  url?: string; // Para YouTube/Vimeo si usas VideoURL
  source: 'File' | 'URL';
  opacity?: number;
}

export default function HeroVideo({ title, subtitle, fileUrl, url, source, opacity = 0.5 }: HeroVideoProps) {
  // Decidimos qué fuente usar
  const finalVideoUrl = source === 'File' ? fileUrl : url;

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. Video de fondo */}
      {finalVideoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 min-w-full min-h-full object-cover"
        >
          <source src={finalVideoUrl} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      )}

      {/* 2. Overlay para legibilidad */}
      <div 
        className="absolute z-10 inset-0 bg-black" 
        style={{ opacity: opacity }}
      ></div>

      {/* 3. Contenido del Texto */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}