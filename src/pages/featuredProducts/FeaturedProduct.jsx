const FeaturedProduct = ({ product }) => {
  const { brand, product_name, price, image } = product || {};
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md mx-auto ">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={image} alt="img-blur-shadow"  />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {product_name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {price}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="btn btn-accent w-full"
          type="button"
          data-ripple-light="true"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
