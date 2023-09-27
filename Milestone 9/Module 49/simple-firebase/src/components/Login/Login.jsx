import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
            console.log(loggedInUser);
        })
        .catch(error => {
            console.log('error:', error.message);
        })
    }


    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <div>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGitHubSignIn}>GitHub Login</button>
                    </div>
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