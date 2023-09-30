import { useContext } from "react";
import { authContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import {PropTypes} from "prop-types";

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

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoutes;