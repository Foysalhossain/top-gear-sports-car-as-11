import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    console.log(allToys);
    useEffect(() => {
        fetch('http://localhost:5000/addCategory')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl text-center font-bold mb-6">All Toys</h1>
                {/* <div>
                    <input
                        type="text"
                        placeholder="Search by Toy Name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="mb-4 px-4 py-2 w-full rounded-md"
                    />
                    {allToys.length === 0 && <p>No matching toys found.</p>}
                </div> */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-center bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                                    Seller
                                </th>
                                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                                    Toy Name
                                </th>
                                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                                    Sub-category
                                </th>
                                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                                    Price
                                </th>
                                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                                    Available Quantity
                                </th>
                                <th className="py-2 px-4 border-b font-bold uppercase text-sm text-gray-700">
                                    View Details
                                </th>
                            </tr>
                        </thead>
                        {
                            allToys.map((toys) => <AllToyRow
                                key={toys.key}
                                toys={toys}
                            ></AllToyRow>)
                        }
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AllToys;