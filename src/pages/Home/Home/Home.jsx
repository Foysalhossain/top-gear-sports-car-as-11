import usePath from "../../../usePath";
import Banner from "../Banner/Banner";
import LatestPost from "../LatestPost/LatestPost";
import OurBrands from "../OurBrands/OurBrands";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategory from "../ShopByCategroy/ShopByCategory";


const Home = () => {
    usePath('AddToy')
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopByCategory></ShopByCategory>
            <LatestPost></LatestPost>
            <OurBrands></OurBrands>
        </div>
    );
};

export default Home;