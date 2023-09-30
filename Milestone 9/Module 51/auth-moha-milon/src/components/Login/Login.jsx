import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Providers/AuthProviders";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(authContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login user
        signInUser(email, password)
        .then(userCredentials => {
            console.log(userCredentials.user);
            e.target.reset();
            navigate('/orders');
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(userCredentials => {
            console.log(userCredentials.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-4">New to Auth Moha Milon? Please <Link to={'/register'} className="font-bold text-blue-700">
                                Register
                            </Link></p>
                            <p className="mt-4">Sign with <button onClick={handleGoogleSignIn} className="font-bold text-blue-700">Google</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;