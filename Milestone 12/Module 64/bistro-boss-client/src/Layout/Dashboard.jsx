import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
    const [cart] = useCarts();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to={'/dashboard/userHome'}>
                            <FaHome /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                            <FaCalendar /> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/myCart'}>
                            <FaShoppingCart /> My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/addReview'}>
                            <FaAd /> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/myBookings'}>
                            <FaList /> My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/orderFood/salad'}>
                            <FaList /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/orderFood/contact'}>
                            <FaEnvelope /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;