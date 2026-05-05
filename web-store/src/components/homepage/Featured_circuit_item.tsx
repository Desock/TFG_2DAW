import Image from "next/image";

type FeaturedCircuitItemProps = {
  data: {
    name: string;
    image?: { url: string };
  };
};

export default function FeaturedCircuitItem({ data }: FeaturedCircuitItemProps) {
  return (
    <div className="circuit-item">
      {data.image && (
        <Image
          src={data.image.url}
          alt={data.name}
          className="circuit-image"
        />
      )}
      <h3>{data.name}</h3>
    </div>
  );
}
