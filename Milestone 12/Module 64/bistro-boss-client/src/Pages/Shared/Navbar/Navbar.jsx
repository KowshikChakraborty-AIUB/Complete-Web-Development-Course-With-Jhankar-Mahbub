import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    const [carts] = useCarts();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navLinks =

        <>
            <li><Link to={'/'}>Home</Link></li>
            {
                user && isAdmin && <li><Link to={'/dashboard/adminHome'}>Dashboard</Link></li>
            }
            {
                user && !isAdmin && <li><Link to={'/dashboard/userHome'}>Dashboard</Link></li>
            }
            <li><Link to={'/menu'}>Our Menu</Link></li>
            <li><Link to={'/orderFood/salad'}>Order Food</Link></li>
            <li>
                <Link to={'/dashboard/myCart'}>
                    <button className="flex gap-2">
                        <div>
                            Cart
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaShoppingCart></FaShoppingCart>
                            <div className="badge badge-secondary">+{carts.length}</div>
                        </div>
                    </button>
                </Link>
            </li>
            {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </li> */}
            {
                user
                    ?
                    <><button onClick={handleLogout} className="btn btn-ghost">Logout</button></>
                    :
                    <><li><Link to={'/login'}>Login</Link></li></>
            }
        </>

    // const navLinks2 =

    //     <>
    //         <li><a>Item 1</a></li>
    //         <li tabIndex={0}>
    //             <details>
    //                 <summary>Parent</summary>
    //                 <ul className="p-2">
    //                     <li><a>Submenu 1</a></li>
    //                     <li><a>Submenu 2</a></li>
    //                 </ul>
    //             </details>
    //         </li>
    //         <li><a>Item 3</a></li>
    //     </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-40 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;