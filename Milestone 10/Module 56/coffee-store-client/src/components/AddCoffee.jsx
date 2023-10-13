const AddCoffee = () => {
    return (
        <div>
            <h2 className="font-bold text-5xl text-center">Add a Coffee</h2>
            <form>
                <div className="flex gap-6 mt-20 justify-center items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;