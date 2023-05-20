import { Link } from "react-router-dom";


const SubCategories = ({ category }) => {
    const { _id, picture, name, price, rating } = category || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">Name: {name}</h2>
                <p className="font-semibold mt-2">Price: ${price}</p>
                <p className="font-semibold mb-2">Rating: {rating}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SubCategories;