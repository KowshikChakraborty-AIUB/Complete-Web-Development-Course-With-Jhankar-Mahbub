import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();
    const handleAddToCart = () => {
        if (user && user.email) {

            console.log(user, user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} has been added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch the cart to update the cart items count.
                      refetch();
                }
            })

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
                    navigate('/login', { state: { from: location } });
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
                <div onClick={handleAddToCart} className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-b-orange-400 hover:text-orange-400 text-black mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;