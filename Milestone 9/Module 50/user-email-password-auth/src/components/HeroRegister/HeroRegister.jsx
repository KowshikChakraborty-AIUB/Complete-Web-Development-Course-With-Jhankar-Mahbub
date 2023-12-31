import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link } from "react-router-dom";

const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassWord, setShowPassWord] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const UserName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(UserName, email, password);

        setRegisterError('');
        setSuccess('');

        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have at least one upper character');
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and conditions!');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                console.log(userCredentials.user);
                setSuccess('User Created Successfully!');

                //upadte profile
                updateProfile(userCredentials.user, {
                    displayName: UserName
                })
                .then(() => {
                    alert('Profile Updated Successfully!');
                })

                //send verification email
                sendEmailVerification(userCredentials.user)
                .then(() => {
                    alert('Please check your email to verify');
                })
            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="userName" placeholder="User name..." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="flex">
                                    <input type="checkbox" name="terms" id="" />
                                    <p className="ml-2">Accept our <a href="" className="font-bold">terms and conditions</a></p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            {
                                registerError && <p className="text-sm text-red-600 font-bold">{registerError}</p>
                            }
                            {
                                success && <p className="text-sm text-green-600 font-bold">{success}</p>
                            }
                            <p>Already have an account? Please <Link className="font-bold" to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;