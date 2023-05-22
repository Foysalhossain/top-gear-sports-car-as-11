import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import usePath from "../../usePath";
import { useLoaderData } from "react-router-dom";


const EditForm = () => {

    const { user } = useContext(AuthContext);
    usePath('AddToy');
    const data = useLoaderData();
    // const { id } = useParams();
    console.log(data);

    const handleAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        let name = user?.displayName;
        const sellerName = form.sellerName.value;
        let sellerEmail = user?.email;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const details = { picture, name, sellerName, sellerEmail, category, price, rating, quantity, description };
        console.log(details);

        fetch(`https://top-gear-sports-car-server.vercel.app/addCategory/${data?._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" value={data?.picture} name="picture" placeholder="Picture Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" value={data?.sellerName} name="sellerName" placeholder="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" value={data?.sellerEmail} name="sellerEmail" placeholder="Seller email" className="input input-bordered" />
                    </div>

                    <div>
                        <label className="block">Sub-category:</label>
                        <select id="subcategory" value={data?.category} name="category" className="rounded-md focus:ring-2 px-4 py-2 w-full border-2 shadow-sm">
                            <option value="racing">Racing</option>
                            <option value="off-road">Off-Road</option>
                            <option value="stunt">Stunt</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={data?.price} name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" value={data?.rating} name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" defaultValue={data?.quantity} name="quantity" placeholder="Available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" defaultValue={data?.description} name="description" placeholder="Detail description" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                </div>
            </form >
        </div>
    );
};

export default EditForm;