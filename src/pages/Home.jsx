import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import ExploreCategory from "../components/category";
import FeaturedJobs from "../components/jobs";
import LatestJobs from "../components/latestjob";
import Footer from "../components/footer.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <ExploreCategory />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />

    </>
  );
};

export default Home;