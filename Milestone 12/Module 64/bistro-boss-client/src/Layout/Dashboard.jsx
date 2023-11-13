import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                            <FaShoppingCart /> My Cart
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
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;