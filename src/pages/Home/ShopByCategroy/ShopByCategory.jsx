import { useEffect, useState } from "react";
import SubCategories from "./SubCategories/SubCategories";


const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState('racing');

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setCategories(result)
            })
    }, [activeTab])

    const toggleTab = (tabName) => {
        setActiveTab(tabName)
    }


    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Shop By Category</h1>
            <div className="tabs tabs-boxed justify-center my-10">
                <div onClick={() => toggleTab('racing')} className={activeTab === 'racing' ? 'tab tab-active' : 'tab'}>
                    Racing Cars
                </div>
                <div onClick={() => toggleTab('stunt')} className={activeTab === 'stunt' ? 'tab tab-active' : 'tab'}>
                    Stunt Cars
                </div>
                <div onClick={() => toggleTab('OffRoad')} className={activeTab === 'OffRoad' ? 'tab tab-active' : 'tab'}>
                    Off Road Cars
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    categories?.map(category => (<SubCategories key={categories.id} category={category}></SubCategories>))
                }
            </div>


        </div>

    );
};

export default ShopByCategory;