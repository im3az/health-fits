import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceCardDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  const intId = parseInt(id);
  //   console.log(id);
  const serviceDetails = useLoaderData();
  //   console.log(serviceDetails);

  useEffect(() => {
    const findDetails = serviceDetails?.find((detail) => detail.id === intId);
    // console.log(findDetails);
    setDetails(findDetails);
  }, [intId]);

  console.log(details);
  return (
    <div className="bg-white border min-h-screen  shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] ">
      <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src={details.image}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-5xl font-bold text-gray-800 dark:text-white">
            {details.name}
          </h3>
          <p className="mt-5 text-2xl text-gray-800 dark:text-gray-400">
            {details.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
