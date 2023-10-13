import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, taste, details, photoURL } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-32 w-28" src={photoURL} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Taste: {taste}</p>
            </div>
            <div className="card-actions">
                <div className="btn-group btn-group-vertical gap-4">
                    <button className="btn">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;