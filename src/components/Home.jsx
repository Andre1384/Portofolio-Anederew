import React from 'react';
import { Link } from 'react-scroll';
import myImage from '../assets/my-image.png';

function Home() {
  return (
    <div 
      className="bg-cover bg-center bg-black text-white text-center flex flex-col justify-center items-center min-h-screen px-4"
      id="home"
    >
      <div className="relative">
        <img 
          src={myImage} 
          alt="Profile" 
          className="w-70 h-70 rounded-full object-cover border-5 border-gray shadow-lg" 
        />
      </div>

      <h1 className="text-5xl font-bold mt-6">
        I'm <span className="text-blue-400">Andre Ajiwijaya</span>
      </h1>
      <p className="mt-4 text-lg text-black-200 max-w-2xl">
        I am an Informatics Engineering student at Sultan Syarif Kasim State Islamic University, Riau, Pekanbaru. 
        With a deep passion for technology, I am committed to continuously developing my skills and knowledge, 
        especially in creating innovative and functional websites and mobile applications.
      </p>

      <div className="mt-8 flex space-x-4">
        <Link 
          to="contact"
          smooth={true} 
          duration={500}
          className="bg-gradient-to-r from-purple-400 to-cyan-500 text-white px-6 py-2 rounded-full text-lg shadow-md transform transition duration-300 hover:scale-105 cursor-pointer">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;