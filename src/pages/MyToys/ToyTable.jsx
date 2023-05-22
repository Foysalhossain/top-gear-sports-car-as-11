
const ToyTable = ({ toy }) => {
    const { name, sellerEmail, price } = toy;
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
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{sellerEmail}</td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </tbody>
    );
};

export default ToyTable;