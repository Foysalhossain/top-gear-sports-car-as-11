import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyTable from "./ToyTable";
import usePath from "../../usePath";


const MyToys = () => {
    usePath('MyToys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://top-gear-sports-car-server.vercel.app/myToys?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setToys(data))
        }

    }, [user?.email])


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://top-gear-sports-car-server.vercel.app/myToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successful');
                        const remaining = toys.filter(toy => toy._id !== id)
                        setToys(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-3xl font-semibold">My Toys</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>SUB-CATEGORY</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    {
                        toys.map(toy => <ToyTable
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></ToyTable>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToys;