import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddToCart = (item) => {
        if (user && user.email) {

            console.log(user, user.email);

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "You have to login to add this food into the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div onClick={() => handleAddToCart(item)} className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-b-orange-400 hover:text-orange-400 text-black mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;