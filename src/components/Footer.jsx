import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Andre Ajiwijaya</h3>
            <p className="text-gray-400">
              Informatics Engineering student based in Indonesia, specializing in web and software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-400 to-cyan-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Submit
              </button>
            </form>

            {submitted && (
              <p className="text-green-400 mt-2 text-center">Form Submitted!</p>
            )}
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Andre. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a 
              href="https://www.facebook.com/andre.ajiwijaya" 
              className="text-white-400 hover:text-white" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/ndrethrten/" 
              className="text-white-400 hover:text-white" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/in/andre-ajiwijaya/" 
              className="text-white-400 hover:text-white" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Andre1384" 
              className="text-white-400 hover:text-white" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
