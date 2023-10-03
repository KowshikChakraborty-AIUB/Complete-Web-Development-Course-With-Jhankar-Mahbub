import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <p className="text-7xl font-bold flex justify-center items-center min-h-screen">Loading...</p>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;