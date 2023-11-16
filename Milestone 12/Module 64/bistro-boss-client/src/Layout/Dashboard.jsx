import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCarts();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin
                            ?
                            <>
                                <li>
                                    <NavLink to={'/dashboard/adminHome'}>
                                        <FaHome /> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItems'}>
                                        <FaUtensils /> Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItems'}>
                                        <FaList /> Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageBookings'}>
                                        <FaBook /> Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allUsers'}>
                                        <FaUsers /> All Users
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
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
                            </>
                    }

                    <div className="divider"></div>
                    {/* shared navLinks */}
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