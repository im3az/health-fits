import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { name, image, id } = service || {};
  return (
    <div className=" relative flex  flex-col rounded-xl bg-white bg-cover text-gray-700 shadow-md mx-auto">
      <div className="relative mx-4 mt-4 mb-4 overflow-hidden rounded-xl bg-white  text-gray-700">
        <img src={image} />
      </div>
      <div className="p-3 absolute bottom-16 left-2 bg-[#DDFA01]">
        <p className="block text-xl font-bold leading-relaxed text-black antialiased">
          {name}
        </p>
      </div>
      <div className="bottom-2 right-2 absolute">
        <Link to={`/service/${id}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
