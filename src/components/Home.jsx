
const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url("./banner_3.jpg")' }}>
                <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-10">
                    <img src="https://i.ibb.co/Nj8SWgG/user.png" className="max-w-sm rounded-full shadow-2xl" />
                <div >
                    <h1 className="text-white text-3xl font-bold">FRONT END DEVELOPER!</h1>
                    <p className="text-white py-6 text-5xl font-extrabold">Fahmida Faiza</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
                </div>
            </div>
        </div>
          
    );
};

export default Home;