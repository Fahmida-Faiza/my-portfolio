
// const Home = () => {
//     return (
//         <div className="hero  bg-base-200 ">
//             <div className="hero h-[500px] " style={{ backgroundImage: 'url("./banner_3.jpg")' }}>
//                 <div className="hero-overlay bg-opacity-50"></div>
//             <div className="hero-content ">
//                     <div className="w-2/3">
//                     <h1 className="text-white text-3xl font-bold">FRONT END DEVELOPER!</h1>
//                     <p className="text-white py-6 text-5xl font-extrabold">Fahmida Faiza</p>
//                         <p className=" text-white text-lg">Welcome to my portfolio website! I am a front-end web developer. I design and build  attractive, user-friendly websites.</p>
//                     {/* <button className="btn btn-primary">Get Started</button> */}
//                 </div>
//                     <img src="https://i.ibb.co/Nj8SWgG/user.png" className="max-w-sm rounded-full shadow-2xl mx-auto" />

//                 </div>
//             </div>
//         </div>
        
          
//     );
// };

// export default Home;

const Home = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url("./banner_3.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-3xl flex gap-6 flex-col md:flex-row items-center">
                            <div>
                                <h1 className="text-white text-3xl font-bold">FRONT END DEVELOPER!</h1>
                                <p className="text-white py-6 text-5xl font-extrabold">Fahmida Faiza</p>
                                <p className=" text-white text-lg">Welcome to my portfolio website! I am a front-end web developer. I design and build  attractive, user-friendly websites.</p>
                            </div>
                            <div>
                                <img src="./fahmida_faiza.jpg" className="w-96 rounded-full shadow-2xl mx-auto" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;