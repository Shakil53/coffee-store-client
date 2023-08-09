

const AddCoffee = () => {
    return (
        <div>
            <h2>Add A Coffee</h2>
            <form>
                <div className="flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="coffee name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div></div>
            </form>
        </div>
    );
};

export default AddCoffee;