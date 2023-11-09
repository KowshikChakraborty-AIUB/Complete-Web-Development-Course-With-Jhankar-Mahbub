import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./Popular Menu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;