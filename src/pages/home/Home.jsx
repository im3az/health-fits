import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import CustomerReview from "../../components/CustomerReview";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
