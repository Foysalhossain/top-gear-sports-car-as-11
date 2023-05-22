import Banner from "../Banner/Banner";
import OurBrands from "../OurBrands/OurBrands";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategory from "../ShopByCategroy/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopByCategory></ShopByCategory>
            <OurBrands></OurBrands>
        </div>
    );
};

export default Home;