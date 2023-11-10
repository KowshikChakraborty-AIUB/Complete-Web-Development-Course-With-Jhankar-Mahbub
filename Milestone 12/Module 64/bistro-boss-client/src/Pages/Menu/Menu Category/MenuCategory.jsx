import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/Menu Item/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {
                title && <Cover menuImg={coverImg} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-6 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/orderFood/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 border-b-black text-black mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;