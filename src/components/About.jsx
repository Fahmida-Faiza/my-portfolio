
const About = () => {
    return (
        <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center flex-col lg:flex-row gap-6">
                {/* <div className="hero min-h-screen " style={{ backgroundImage: 'url("./banner_3.jpg")' }}></div> */}
                <img src="./banner_2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="relative">
                    <h1 className="text-5xl font-bold absolute -ml-10 -mt-20 text-white">About Me</h1>
                    <p className="py-6 text-xl text-justify">“Creative, self-starting, and ambitious Front-End Developer with 10 years of experience, in website development, for both Responsive e-Commerce and portfolio websites plus Mobile applications in fast-paced, collaborative environments. Highly Experienced in HTML/CSS/JavaScript/JQuery and working knowledge of Photoshop.</p>
                    {/* <button className="btn btn-primary">Show More</button> */}
                </div>
            </div>
         
          
          

        </div>
    );
};

export default About;