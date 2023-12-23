import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const About = () => {
    return (
        // <div className="hero min-h-fit bg-base-200  mt-16 w-80 lg:w-96">
        //     <div>
        //         <div className="hero-content text-center flex-col lg:flex-row gap-6 ">
        //             {/* <div className="hero min-h-screen " style={{ backgroundImage: 'url("./banner_3.jpg")' }}></div> */}
        //             <img src="./banner_2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        //             <div >
        //                 <h1 className="text-5xl font-bold text-start ">About Me</h1>
        //                 <p className="py-6 text-xl text-justify">“Creative, self-starting, and ambitious Front-End Developer with 10 years of experience, in website development, for both Responsive e-Commerce and portfolio websites plus Mobile applications in fast-paced, collaborative environments. Highly Experienced in HTML/CSS/JavaScript/JQuery and working knowledge of Photoshop.</p>
        //                 {/* <button className="btn btn-primary">Show More</button> */}
        //                 <h3 className=" text-2xl font-medium mt-5 text-start">Contact with Me... </h3>
        //                 <div className="text-3xl flex gap-3 my-5">
        //                     <Link to="mailto: fahmidafaiza57@gmail.com"><MdOutlineEmail /></Link>
        //                     <Link to="https://github.com/Fahmida-Faiza" target="_blank"><FaGithub /></Link>
        //                     <Link to="https://www.linkedin.com/in/fahmida-faiza-14a446232/" target="_blank"><FaLinkedin /></Link>
        //                 </div>
        //             </div>
        //     </div>

        //     </div>
        // </div>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="./banner_2.jpg" className="w-80 lg:w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-start ">About Me</h1>
                    <p className="py-6 text-xl text-justify">“Creative, self-starting, and ambitious Front-End Developer with 10 years of experience, in website development, for both Responsive e-Commerce and portfolio websites plus Mobile applications in fast-paced, collaborative environments. Highly Experienced in HTML/CSS/JavaScript/JQuery and working knowledge of Photoshop.</p>
                    {/* <button className="btn btn-primary">Show More</button> */}
                    <h3 className=" text-2xl font-medium mt-5 text-start">Contact with Me... </h3>
                    <div className="text-3xl flex gap-3 my-5">
                        <Link to="mailto: fahmidafaiza57@gmail.com"><MdOutlineEmail /></Link>
                        <Link to="https://github.com/Fahmida-Faiza" target="_blank"><FaGithub /></Link>
                        <Link to="https://www.linkedin.com/in/fahmida-faiza-14a446232/" target="_blank"><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default About;