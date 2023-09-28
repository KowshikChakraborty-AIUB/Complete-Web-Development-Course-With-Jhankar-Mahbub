import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassWord, setShowPassWord] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password, email);

        //reset error
        setRegisterError('');
        setSuccess('');

        //regex
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have at least one upper character');
            return;
        }

        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                console.log(userCredentials.user);
                setSuccess('User Created Successfully!');
            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }

    const handleShowPassWord = () => {
        
        setShowPassWord(!showPassWord);
    }

    return (

        <div className="mt-36">
            <div className="w-1/2 mx-auto">
                <h2 className="text-3xl mx-40 mb-4">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="border border-[#CC009C] rounded mb-4 w-3/4 px-4 py-2" type="email" name="email" id="" placeholder="email address..." required />
                    <br />
                    <input className="border border-[#CC009C] rounded mb-4 w-3/4 px-4 py-2" type={showPassWord?'text':'password'} name="password" id="" placeholder="password..." required />
                    <span onClick={handleShowPassWord} className="hover:cursor-pointer">Show</span>
                    <br />
                    <input className="border mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-sm text-red-600 font-bold">{registerError}</p>
                }
                {
                    success && <p className="text-sm text-green-600 font-bold">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;