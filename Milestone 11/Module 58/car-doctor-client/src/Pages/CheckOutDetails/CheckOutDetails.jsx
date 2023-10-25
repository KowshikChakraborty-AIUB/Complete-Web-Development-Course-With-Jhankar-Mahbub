import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CheckOutDetailsRow from "./CheckOutDetailsRow/CheckOutDetailsRow";

const CheckOutDetails = () => {
    const { user } = useContext(AuthContext);
    const [checkOutDetails, setCheckOutDetails] = useState([]);
    const url = `http://localhost:5000/orders?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCheckOutDetails(data);
            })
    }, [url])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th></th>
                        <th>Customer Name</th>
                        <th>Email ID</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    checkOutDetails.map(details => <CheckOutDetailsRow key={details._id} details={details}></CheckOutDetailsRow>)
                   }
                </tbody>

            </table>
        </div>
    );
};

export default CheckOutDetails;