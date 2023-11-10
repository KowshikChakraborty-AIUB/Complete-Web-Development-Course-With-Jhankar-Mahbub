import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from "../../Home/Popular Menu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover menuImg={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover menuImg={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover menuImg={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;