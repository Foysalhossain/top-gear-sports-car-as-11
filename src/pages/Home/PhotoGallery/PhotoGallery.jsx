import img1 from '../../../assets/gallery-img/1.jpg'
import img2 from '../../../assets/gallery-img/2.jpg'
import img3 from '../../../assets/gallery-img/3.jpg'
import img4 from '../../../assets/gallery-img/4.jpg'
import img5 from '../../../assets/gallery-img/5.jpg'
import img6 from '../../../assets/gallery-img/6.jpg'

const PhotoGallery = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className=' text-3xl font-bold'>Buy Kids Ride On Cars</h1>
                <p className='my-3'>Get 25% Off On First Order And Also Get Gift Voucher</p>
            </div>
            <div className="grid grid-cols-3 rounded-box">
                <div className="carousel-item">
                    <img src={img1} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img4} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img5} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img6} alt="Drink" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;