
import { HiOutlineEye, HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = () => {
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
                console.log('dete Confirmed')


                fetch(`http://localhost:5000/coffee/${_id}`,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCout > 0) {
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
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 p-4 mt-2">
                <div>
                    <h1 className="card-title text-2xl">{name}</h1>
                    <p className="text-lg">Quantity: {quantity}</p>
                    <p className="text-lg">Supplier: {supplier}</p>
                    <p className="text-lg">Details: {details}</p>
                    <p className="text-lg">Taste: {taste}</p>
                    <p className="text-lg">Category: {category}</p>
                </div>
                <div className="card-actions justify-end">

                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn bg-primary-subtle border border-success-subtle"><HiOutlineEye></HiOutlineEye></button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn bg-primary-subtle border border-success-subtle"><HiPencil></HiPencil></button></Link>
                        <button onClick={handleDelete} className="btn bg-primary-subtle border border-success-subtle"><HiTrash></HiTrash></button>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;