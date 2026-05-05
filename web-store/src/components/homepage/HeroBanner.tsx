export type StrapiImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type StrapiMedia = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: unknown | null;
  width: number;
  height: number;
  formats: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};


export type StrapiFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};


type HeroBannerProps = {
  data: {
    title: string;
    subtitle?: string;
    backgroundImg?: StrapiMedia;
    ctaLabel: string;
    ctaURL: string;
  };
};



export default function HeroBanner({ data }: HeroBannerProps) {
  return (
    <section className="hero">
      {data.backgroundImg?.url && (
        <img
          src={data.backgroundImg.url}
          alt="background-img"
          className="hero-image"
          width={500}
          height={500}
        />
      )}

      <div className="hero-content">
        <h1>{data.title}</h1>
        {data.subtitle && <p>{data.subtitle}</p>}
      </div>
    </section>
  );

}
