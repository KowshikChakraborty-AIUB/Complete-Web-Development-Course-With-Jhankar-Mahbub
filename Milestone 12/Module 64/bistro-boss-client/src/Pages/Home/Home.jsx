import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeaturedItem from "./Featured Item/FeaturedItem";
import PopularMenu from "./Popular Menu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;