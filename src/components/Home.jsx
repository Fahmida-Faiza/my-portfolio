
const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero h-[500px] " style={{ backgroundImage: 'url("./banner_3.jpg")' }}>
                <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content">
                <div >
                    <h1 className="text-white text-3xl font-bold">FRONT END DEVELOPER!</h1>
                    <p className="text-white py-6 text-5xl font-extrabold">Fahmida Faiza</p>
                    <p className=" text-white w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic laudantium autem laborum. Debitis maxime consequuntur voluptatem, esse dolore exercitationem in.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
                    <img src="https://i.ibb.co/Nj8SWgG/user.png" className="max-w-sm rounded-full shadow-2xl" />

                </div>
            </div>
        </div>
        
          
    );
};

export default Home;