import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    const handleDelete = (_id) => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully!')
            }
        })
    }


    return (
        <div>
            {
                users.map(user => <p key={user._id}>{user.name}: {user.email} 
                
                    <button onClick={()=>handleDelete(user._id)}>Delete</button>

                </p>)
            }
        </div>
    );
};

export default Users;