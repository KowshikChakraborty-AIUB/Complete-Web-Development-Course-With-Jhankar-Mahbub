import { useContext } from "react";
import { authContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(authContext);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoutes;