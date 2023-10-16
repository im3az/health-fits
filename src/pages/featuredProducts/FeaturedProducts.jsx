import { useEffect, useState } from "react";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
  // const products = useLoaderData();
  // console.log(products);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(products);
  return (
    <div className="min-h-screen pb-16 bg-[#141E23]">
      <div className=" mx-auto  text-center">
        <h2 className="text-4xl text-white pt-14 font-bold">
          FEATURED PRODUCTS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 ">
        {products.map((product) => (
          <FeaturedProduct key={product.id} product={product}></FeaturedProduct>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
