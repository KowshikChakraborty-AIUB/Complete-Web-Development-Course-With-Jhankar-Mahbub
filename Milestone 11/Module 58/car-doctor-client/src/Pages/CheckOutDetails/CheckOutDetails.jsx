import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const CheckOutDetails = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/orders?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default CheckOutDetails;