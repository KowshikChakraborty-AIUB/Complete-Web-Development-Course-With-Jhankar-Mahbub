import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
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

    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status;
        console.log('Status error in the interceptor', status);
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;