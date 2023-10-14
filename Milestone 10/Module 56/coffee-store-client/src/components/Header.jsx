import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-6 justify-center mb-10">
            <NavLink to={'/'}>
                Home
            </NavLink>
            <NavLink to={'/signUp'}>
                Sign Up
            </NavLink>
            <NavLink to={'/users'}>
                Users
            </NavLink>
            <NavLink to={'/addCoffee'}>
                Add Coffee
            </NavLink>
        </div>
    );
};

export default Header;