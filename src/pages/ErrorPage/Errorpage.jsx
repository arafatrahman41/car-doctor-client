import error from '../../assets/error/404-error.jpg';

const Errorpage = () => {
    return (
        <div className='container mx-auto px-8 flex justify-center items-center min-h-screen'>
            <img src={error} alt="" />
        </div>
    );
};

export default Errorpage;