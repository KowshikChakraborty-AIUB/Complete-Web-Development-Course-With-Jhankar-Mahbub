import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassWord, setShowPassWord] = useState(false);
    const emailRef = useRef(null);

    const handleLongin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //reset error
        setRegisterError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                console.log(userCredentials.user);
                setSuccess('User logged in Successfully!');
            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }

    const handleForgetPassWord = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log('Please write your email id', email);
            return;
        }

        //send password reset email
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('please check your email');
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLongin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input type={showPassWord ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span className="flex items-center w-1/12 hover:cursor-pointer" onClick={() => setShowPassWord(!showPassWord)}>

                                        {
                                            showPassWord ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }

                                    </span>
                                </div>
                                <label className="label">
                                    <a onClick={handleForgetPassWord} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-sm text-red-600 font-bold">{registerError}</p>
                        }
                        {
                            success && <p className="text-sm text-green-600 font-bold">{success}</p>
                        }
                        <p>New to this website? Please <Link className="font-bold" to={'/heroRegister'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;