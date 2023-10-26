import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <progress className="progress progress-accent w-56" value={0} max="100"></progress>
            <progress className="progress progress-accent w-56" value="10" max="100"></progress>
            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
            <progress className="progress progress-accent w-56" value="70" max="100"></progress>
            <progress className="progress progress-accent w-56" value="100" max="100"></progress>

        </>
    }

    if (user?.email) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to={'/login'} replace></Navigate>
    );
};

export default PrivateRoutes;