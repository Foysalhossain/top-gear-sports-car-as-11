import img1 from '../../../assets/brnads/1.jpg'
import img2 from '../../../assets/brnads/2.jpg'
import img3 from '../../../assets/brnads/3.jpg'
import img4 from '../../../assets/brnads/4.jpg'
import img5 from '../../../assets/brnads/5.jpg'
import img6 from '../../../assets/brnads/6.jpg'

const OurBrands = () => {
    return (
        <div className='my-20'>
            <h2 className="text-3xl text-center font-bold">Our Brands</h2>
            <div className='grid mx-auto md:grid-cols-4 lg:grid-cols-6 my-8 justify-center'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </div>
    );
};

export default OurBrands;