import { createContext } from "react";
import PropTypes from 'prop-types';

export const authContext = createContext(null);

const authInfo = {name: 'Hello Kowshik'};

const AuthProviders = ({children}) => {
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProviders;