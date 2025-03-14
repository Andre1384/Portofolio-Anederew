import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 mb-4">
            Let's Connect
            </h3>
            <p>I'm open to collaborating on web and mobile application development projects, as well as exciting partnership opportunities.
               Let's build something amazing together!</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-white-400 mr-2" />
              <a href="mailto:andreajiwijaya98@gmail.com" className="hover:underline">
                andreajiwijaya98@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-white-400 mr-2" />
              <span>+6282287488107</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-white-400 mr-2" />
              <span> Amal Alley, Usaha Street, Pekanbaru, Riau, Indonesia. </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-400 to-cyan-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>

            {submitted && (
              <p className="text-green-400 mt-4">Form Submitted!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
