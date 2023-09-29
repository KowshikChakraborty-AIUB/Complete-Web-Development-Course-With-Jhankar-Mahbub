import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user, createUser};

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