import React from "react";
import myImage2 from "../assets/my-image2.png";

function About() {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    <img 
                        src={myImage2} 
                        alt="Profile" 
                        className="w-80 h-90 rounded object-cover mb-8 md:mb-0"
                    />
                    <div className="flex-1"> 
                        <p className="text-lg mb-8">
                            Hi, I'm Andre Ajiwijaya, a passionate Informatics Engineering student specializing in web and mobile application development. 
                            I enjoy creating efficient, user-friendly, and visually appealing digital solutions. With experience in modern technologies like React.js, Tailwind CSS, and mobile development frameworks, 
                            I'm always eager to learn and explore new innovations in the tech world.
                        </p>
                        <div className="space-y-4">

                            <div className="flex items-center">
                                <label htmlFor="frontend" className="w-2/12"> Frontend Dev </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-purple-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="backend" className="w-2/12"> Backend Dev </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-purple-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="mobile" className="w-2/12"> Mobile Dev </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-purple-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="database" className="w-2/12"> Database </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-purple-400 to-cyan-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-12 flex justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-500">5+</h3>
                                <p>Tech Stack Mastery</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-500">20+</h3>
                                <p>Personal & Team Projects</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-500">3+</h3>
                                <p>Certifications & Achievements</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}   

export default About;