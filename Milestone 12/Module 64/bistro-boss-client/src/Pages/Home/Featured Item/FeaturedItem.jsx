import SectionTitle from "../../../components/Section Title/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';
import './FeaturedItem.css';

const FeaturedItem = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle heading={'Featured Items'} subHeading={'Check it Out'}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae quaerat quo voluptas natus suscipit at dolorem aut incidunt expedita voluptatum adipisci eius, nesciunt nostrum repellendus totam doloremque similique itaque est nulla? Qui eveniet quod quas? Fugit dolore accusamus iusto in fuga. Adipisci iste illo maxime sed tenetur necessitatibus ducimus.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-b-white text-white mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;