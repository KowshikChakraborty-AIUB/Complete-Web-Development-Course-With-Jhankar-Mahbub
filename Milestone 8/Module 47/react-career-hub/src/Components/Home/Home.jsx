import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Banner></Banner>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;