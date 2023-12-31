import { Link } from "react-router-dom";


const ToyTable = ({ toy, handleDelete }) => {
    const { _id, name, sellerName, sellerEmail, price, quantity } = toy;
    // console.log(price);


    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold">{sellerName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{sellerEmail}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <th>
                    <Link to={`/editToy/${_id}`}>
                        <button className="btn btn-outline btn-secondary">Edit</button>
                    </Link>
                </th>
            </tr>
        </tbody>
    );
};

export default ToyTable;