

const CoffeeCard = ({ coffee }) => {
    const { coffeeName, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 p-4">
                <div>
                    <h2 className="card-title">Name: {coffeeName}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Details: {details}</p>
                    <p>Taste: {taste}</p>
                    <p>Category: {category}</p>
                </div>
                <div className="card-actions justify-end">

                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn ">view</button>
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;