import BestSeller from "../Components/BestSeller";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
    </div>
  );
};

export default Home;
