import FeaturedCarItem from "./Featured_car_item";

type FeaturedCarsProps = {
  data: {
    title?: string;
    cars: Array<{
      name: string;
      image?: { url: string };
    }>;
  };
};

export default function FeaturedCars({ data }: FeaturedCarsProps) {
  return (
    <section className="featured-cars">
      {data.title && <h2>{data.title}</h2>}

      <div className="cars-grid">
        {data.cars?.map((car, index) => (
          <FeaturedCarItem key={index} data={car} />
        ))}
      </div>
    </section>
  );
}
