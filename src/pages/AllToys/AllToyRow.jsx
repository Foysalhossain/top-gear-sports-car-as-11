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
                    <Link to={''} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        View Details
                    </Link>
                </td>
            </tr>
        </tbody>
    );
};

export default AllToyRow;