import FeaturedCircuitItem from "./Featured_circuit_item";

type FeaturedCircuitsProps = {
  data: {
    title?: string;
    circuits: Array<{
      name: string;
      image?: { url: string };
    }>;
  };
};

export default function FeaturedCircuits({ data }: FeaturedCircuitsProps) {
  return (
    <section className="featured-circuits">
      {data.title && <h2>{data.title}</h2>}

      <div className="circuits-grid">
        {data.circuits?.map((circuit, index) => (
          <FeaturedCircuitItem key={index} data={circuit} />
        ))}
      </div>
    </section>
  );
}
