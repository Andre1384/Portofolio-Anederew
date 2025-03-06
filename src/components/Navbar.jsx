import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24 py-4 fixed w-full top-0 left-0 shadow-lg z-50">
            <div className="container flex justify-between items-center">
                
                <div className="flex items-center space-x-2">
                    <img src="src/assets/logo.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-2xl font-bold">ANEDEREW</span>
                </div>

                
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none"
                >
                    ☰
                </button>

                
                <div className="hidden md:flex space-x-6">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Home</Link>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About</Link>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Skills</Link>
                    <Link to="experiences" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Experiences</Link>
                    <Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer hover:text-gray-400">Contact</Link>
                </div>
            </div>

            
            <div className={`absolute top-16 left-0 w-full bg-black py-4 px-8 flex-col items-start space-y-2 transition-all duration-300 ${isOpen ? "flex" : "hidden"} md:hidden`}>
                <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Home</Link>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About</Link>
                <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Skills</Link>
                <Link to="experiences" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Experiences</Link>
                <Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer hover:text-gray-400">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
