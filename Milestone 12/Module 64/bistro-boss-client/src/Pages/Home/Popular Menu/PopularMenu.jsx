// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Section Title/SectionTitle";
import MenuItem from "../../Shared/Menu Item/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems);
    //     })
    // }, [])
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;