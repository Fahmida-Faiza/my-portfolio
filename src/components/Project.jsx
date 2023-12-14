import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div>
            <h3>Project page</h3>
            <div className="flex gap-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="./project1.png" alt="career fair" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Career Fair</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <Link to="https://react-donation-campain.vercel.app/" target="_blank"><button className="btn btn-primary">Live Link</button></Link>
                            <Link to="https://github.com/Fahmida-Faiza/React-Donation-campain-assingment" target="_blank"><button className="btn btn-primary">Github Link</button></Link>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Details</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="text-3xl font-semibold text-white my-3">Features of my website</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>You can see all the services we provide.</li>
                                        <li>You can ask any question.</li>
                                        <li>Show all the details of events.</li>
                                        <li>Login and registration system.</li>
                                        <li>Can not see sensitive info without login.</li>
                                    </ul>
                                    <h3 className="text-3xl font-semibold text-white my-3">Technology</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>React</li>
                                        <li>Firebase</li>
                                        <li>Tailwind css</li>
                                        <li>Daisy UI</li>
                                    </ul>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="./project3.png" alt="weather api" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Weather API</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <Link to="https://weather-api-nine-olive.vercel.app/" target="_blank"><button className="btn btn-primary">Live Link</button></Link>
                            <Link to="https://github.com/Fahmida-Faiza/weather-api" target="_blank"><button className="btn btn-primary">Github Link</button></Link>
                            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="text-3xl font-semibold text-white my-3">Features of my website</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>You can see over the world temperature.</li>
                                        <li>You can see those by icons</li>
                                        <li>Show here date and time also</li>
                                        <li>You can see another info like sunset, pressure etc.</li>
                                        <li>You can see country name.</li>
                                    </ul>
                                    <h3 className="text-3xl font-semibold text-white my-3">Technology</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>React</li>
                                        <li>Javascript</li>
                                        <li>CSS 3</li>
                                        <li>HTML 5</li>
                                    </ul>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="./project2.png" alt="Donation Campain" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Donation Campain</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <Link to="https://react-donation-campain.vercel.app/" target="_blank"><button className="btn btn-primary">Live Link</button></Link>
                            <Link to="https://github.com/Fahmida-Faiza/React-Donation-campain-assingment" target="_blank"><button className="btn btn-primary">Github Link</button></Link>
                            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Details</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="text-3xl font-semibold text-white my-3">Features of my website</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>You can donate here by click.</li>
                                        <li>You can see donation by pie chart.</li>
                                        <li>You can find common field by color.</li>
                                    </ul>
                                    <h3 className="text-3xl font-semibold text-white my-3">Technology</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>React</li>
                                        <li>Javascript</li>
                                        <li>Daisyui</li>
                                        <li>Tailwind css</li>
                                    </ul>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Project;