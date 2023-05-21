import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { picture, name, seller_name, seller_email, price, quantity, description, rating } = details

    return (
        <div className="card w-full mx-auto bg-base-100 shadow-xl my-20">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span>Toy Name:</span> {name}</h2>
                <h2 className="card-title">Seller Name: {seller_name}</h2>
                <p><span className="font-semibold">Seller Email:</span> {seller_email}</p>
                <p><span className="font-semibold">Price:</span> ${price}</p>
                <p><span className="font-semibold">Available Quantity:</span> {quantity}</p>
                <p><span className="font-semibold">Ratings:</span> {rating}</p>
                <p><span className="font-semibold">Description:</span> {description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;