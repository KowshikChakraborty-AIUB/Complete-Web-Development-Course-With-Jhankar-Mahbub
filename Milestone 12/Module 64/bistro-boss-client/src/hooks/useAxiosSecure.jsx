import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    // request interceptor to add authorization header for every secure call to the api.
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token');
        console.log('request stopped by interceptors');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    // intercepts 401, 403 status

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (err) => {
        console.log('status err in the interceptor', err);
        const status = err.response.status;
        //console.log('Status error in the interceptor', status);
        if (status === 401 || status === 403) {
            //for 401 or 403, logout the user and navigate the user to the login page
            await logout();
            navigate('/login');
        }
        return Promise.reject(err);
    });

    return axiosSecure;
};

export default useAxiosSecure;