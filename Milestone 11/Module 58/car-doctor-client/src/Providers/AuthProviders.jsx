import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app); 

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    const createUser = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            SetLoading(false);
            setUser(currentUser)
        })
        return () => {return unsubscribe()};
    }, [])

    const authInfo = {user, loading, createUser, signIn};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;