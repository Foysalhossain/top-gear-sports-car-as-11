import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [user])

    return (
        <div>
            <h2>My Toys</h2>
        </div>
    );
};

export default MyToys;