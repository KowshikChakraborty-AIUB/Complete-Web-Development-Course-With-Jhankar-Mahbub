const CoffeeCard = ({ coffee }) => {

    const { name, taste, details, photoURL } = coffee;

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
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;