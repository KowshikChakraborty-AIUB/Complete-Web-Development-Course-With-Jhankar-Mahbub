import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(userCredentials => {
            console.log(userCredentials.user);
            navigate('/');
        })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div className="flex justify-center">
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-4"></FaGoogle>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;