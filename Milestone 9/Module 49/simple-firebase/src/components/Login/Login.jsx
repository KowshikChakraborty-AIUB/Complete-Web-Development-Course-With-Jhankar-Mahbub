import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            {
                user ?
                    <button onClick={handleGoogleSignOut}>Sign Out</button> :
                    <button onClick={handleGoogleSignIn}>Google Login</button>
            }
            {
                user &&
                <div>
                    <h3>
                        User: {user.displayName}
                    </h3>
                    <p>
                        E-mail: {user.email}
                    </p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;