import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CheckOutDetailsRow from "./CheckOutDetailsRow/CheckOutDetailsRow";
import axios from "axios";

const CheckOutDetails = () => {
    const { user } = useContext(AuthContext);
    const [checkOutDetails, setCheckOutDetails] = useState([]);
    const url = `http://localhost:5000/orders?email=${user.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setCheckOutDetails(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setCheckOutDetails(data);
        //     })
    }, [url])

    const handleDelete = (_id) => {
        const proceed = confirm('Are you sure?');
        if(proceed){
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully!')
                    const remaining = checkOutDetails.filter(details => details._id !== _id)
                    setCheckOutDetails(remaining);
                }
            })
        }
    }

    const handleConfirm = (_id) => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'Confirmed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Confirmed Successfully!')
                const remaining = checkOutDetails.filter(details => details._id !== _id)
                const updated = checkOutDetails.find(details => details._id === _id)
                updated.status = 'Confirmed'
                const newOrders = [updated, ...remaining];
                setCheckOutDetails(newOrders);
            }
        })
    }

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
                    checkOutDetails.map(details => <CheckOutDetailsRow key={details._id} details={details} handleDelete={handleDelete} handleConfirm={handleConfirm}></CheckOutDetailsRow>)
                   }
                </tbody>

            </table>
        </div>
    );
};

export default CheckOutDetails;