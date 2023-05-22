import { useContext, useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import { AuthContext } from "../../providers/AuthProvider";
import usePath from "../../usePath";


const AllToys = () => {
    usePath('AllToy')
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        fetch('https://top-gear-sports-car-server.vercel.app/addCategory')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    useEffect(() => {
        fetch(`https://top-gear-sports-car-server.vercel.app/myToys/${user?.email}`)
            .then((result) => result.json())
            .then(data => {
                setAllToys(data);
            })
    }, [user])

    const handleSearch = () => {
        fetch(`https://top-gear-sports-car-server.vercel.app/toySearchByTitle/${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            })
    }


    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl text-center font-bold mb-6">All Toys</h1>

                <div className="form-control mb-10">
                    <div className="input-group justify-center">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

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
                            allToys?.map((toys) => <AllToyRow
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