import img1 from '../../../assets/postImg/1.png'
import img2 from '../../../assets/postImg/2.png'
import img3 from '../../../assets/postImg/3.png'

const LatestPost = () => {
    return (
        <div className='my-20'>
            <div className='text-center my-6'>
                <h2 className="text-3xl font-bold">Latest Post</h2>
                <p className='py-4'>20 Toy Car Play Ideas for Kids to Spark Creativity</p>
            </div>
            <div className='grid grid-cols-3'>
                <div className="card rounded-none w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">PRETEND PLAY TOY CAR ACTIVITIES</h2>
                        <p>For many years before kid activity blogs exploded on the internet, this was the most popular post on this blog. It is so simple and yet keeps kids busy for hours!?</p>
                    </div>
                </div>
                <div className="card rounded-none w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SENSORY TOY CAR PLAY IDEAS</h2>
                        <p>Toy vehicles of all kinds are a natural addition to any child pretend play repertoire! Here are some incredibly easy ways we have made toy car play even more entertaining</p>
                    </div>
                </div>
                <div className="card rounded-none w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">OUTDOOR TOY CAR ACTIVITY IDEAS</h2>
                        <p>I am sure your kids have clung to their little toy car friends even as you tried to leave home. Let them take them to the park and playground!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestPost;