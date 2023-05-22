import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        let name = user?.displayName;
        const sellerName = form.sellerName.value;
        let sellerEmail = user?.email;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.picture.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const details = { picture, name, sellerName, sellerEmail, category, price, rating, quantity, description };
        console.log(details);

        fetch('http://localhost:5000/addCategory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Toy Added')
            })
    }


    return (
        <div className="my-20">
            <h2 className="text-center text-4xl mb-10">Add Toy</h2>
            <form onSubmit={handleAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name="picture" placeholder="Picture Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user.displayName} name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" value={user.email} name="sellerEmail" placeholder="Seller email" className="input input-bordered" />
                    </div>

                    <div>
                        <label className="block">Sub-category:</label>
                        <select id="subcategory" name="category" className="rounded-md focus:ring-2 px-4 py-2 w-full border-2 shadow-sm">
                            <option value="racing">Racing</option>
                            <option value="off-road">Off-Road</option>
                            <option value="stunt">Stunt</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="description" placeholder="Detail description" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add a Toy" />
                </div>
            </form >
        </div >
    );
};

export default AddToy;