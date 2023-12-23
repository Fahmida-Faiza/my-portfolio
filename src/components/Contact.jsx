
const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-20">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url("./banner_4.jpg")' }}></div>
          
            <div className="hero-content flex-col lg:flex-row-reverse">
            
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white md:text-black">Contact now!</h1>
                  
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder=" Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-info" placeholder="Enter your message"></textarea>
                        </div>
                     
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;