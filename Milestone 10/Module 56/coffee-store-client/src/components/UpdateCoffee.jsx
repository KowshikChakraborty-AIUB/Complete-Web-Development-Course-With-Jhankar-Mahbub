import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photoURL } = coffee;


    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photoURL = form.photoURL.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photoURL };

        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Coffee Updated!',
                        text: 'Do you want to continue?',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <h2 className="font-bold text-5xl text-center">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name & qauntity row */}
                <div className="md:flex gap-6 mt-20 justify-center items-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier & taste row */}
                <div className="md:flex gap-6 mt-20 justify-center items-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Spplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & details row */}
                <div className="md:flex gap-6 mt-20 justify-center items-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="mt-20">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoURL" defaultValue={photoURL} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-10 bg-black text-white" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;