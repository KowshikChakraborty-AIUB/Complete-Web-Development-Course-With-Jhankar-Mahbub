import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const CheckOut = () => {

    const service = useLoaderData();
    const { service_id, title, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleCheckOutOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email || 'N/A';
        const dueAmount = form.dueAmount.value;

        const order = {
            customerName: name,
            service_id,
            img,
            title,
            date,
            email,
            dueAmount
        }

        console.log(order);


        fetch('http://localhost:5000/orders', {
            method: 'POST', 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Order Service: {title}</h2>
            <form onSubmit={handleCheckOutOrder} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" readOnly required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={`$ ` + price} name="dueAmount" placeholder="due amount" className="input input-bordered" readOnly required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value={'Confirm Order'} className="btn btn-primary btn-block"></input>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;