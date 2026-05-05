import Image from "next/image";

type FeaturedCarItemProps = {
  data: {
    name: string;
    image?: { url: string };
  };
};

export default function FeaturedCarItem({ data }: FeaturedCarItemProps) {
  return (
    <div className="car-item">
      {data.image && (
        <Image
          src={data.image.url}
          alt={data.name}
          className="car-image"
        />
      )}
      <h3>{data.name}</h3>
    </div>
  );
}
