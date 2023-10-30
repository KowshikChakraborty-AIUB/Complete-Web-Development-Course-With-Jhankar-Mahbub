import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log(err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                console.log("log out the user");
                logOut()
                    .then(userCredentials => {
                        userCredentials.user
                        navigate('/login');
                    })
                    .catch(error => {
                        error.message
                    })
            }
        })
    }, [logOut, navigate])
    return axiosSecure;
};

export default useAxiosSecure;