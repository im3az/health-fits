const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HdKZG5p/Slider-1-ec658754-1be1-4610-818f-26af9a3ec770.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="text-center lg:text-left text-white">
        <div className="mr-">
          <h1 className="mb-5 text-5xl font-bold">Stretching is never done</h1>
          <p className="mb-5">
            Chose the right workouts & stay fit. Our coaches will help you
            achieve your goals. <br /> Get special offer on shaping your body.
          </p>
          <button className="btn btn-primary">About us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
