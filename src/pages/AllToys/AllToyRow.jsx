import { Link } from "react-router-dom";

const AllToyRow = ({ toys }) => {
    return (
        <tbody key={toys._id}>
            <tr>
                <td className="py-2 px-4 border-b">{toys.sellerName}</td>
                <td className="py-2 px-4 border-b">{toys.name}</td>
                <td className="py-2 px-4 border-b">{toys.category}</td>
                <td className="py-2 px-4 border-b">${toys.price}</td>
                <td className="py-2 px-4 border-b">{toys.quantity}</td>
                <td className="py-2 px-4 border-b">
                    <Link to={''} >
                        <button className="btn btn-active btn-secondary">View Details</button>
                    </Link>
                </td>
            </tr>
        </tbody>
    );
};

export default AllToyRow;