
const ToyTable = ({ toy }) => {
    const { name, sellerName, sellerEmail, price, quantity } = toy;
    return (
        <tbody>
            {/* row 1 */}

            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
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
                    <button className="btn btn-outline btn-secondary">View Details</button>
                </th>
            </tr>
        </tbody>
    );
};

export default ToyTable;