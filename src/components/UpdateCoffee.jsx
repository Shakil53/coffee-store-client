import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee)




        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }



    return (
        <div className="p-24 bg-[#F4F3F0]">
            <h2 className="text-3xl font-bold ml-6">Update A Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* row */}
                <div className="md:flex p-4 ">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="number" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className=" w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* row */}
                <div className="md:flex p-4 ">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Supplier Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className=" w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* row */}
                <div className="md:flex p-4 ">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details} placeholder="Details" className=" w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* Photo */}
                <div className="form-control p-4">
                    <label className="label">
                        <span className="label-text"> Photo Url</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" defaultValue={photo} placeholder="coffee name" className="input input-bordered w-full" />
                    </label>
                    <button className=" mt-9 btn btn-block  bg-[#D2B48C]" name="addCoffee">Update Coffee</button>
                </div>




            </form >
        </div >
    );
};

export default UpdateCoffee;