import FeaturedProducts from "../pages/featuredProducts/FeaturedProducts";
import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
  return (
    <div className="mt-20 mx-auto ">
      <div className=" text-center">
        <h2 className="text-4xl font-bold">TRAININGS WE OFFER</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-12 mt-10">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div>
        <FeaturedProducts></FeaturedProducts>
      </div>
    </div>
  );
};

export default Services;
