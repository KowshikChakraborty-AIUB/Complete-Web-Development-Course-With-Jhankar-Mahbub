import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(userCredentials => {
            console.log(userCredentials.user);
            const userInfo = {
                name: userCredentials.user.displayName,
                email: userCredentials.user.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
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