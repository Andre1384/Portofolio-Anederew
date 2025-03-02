import React from "react";
import CircularGallery from "./CircularGallery";
import forensikImage from "../assets/forensik.png";
import simatifImage from "../assets/simatif.png";
import secominfotechImage from "../assets/secom-infotech.png";

const exp = [
    {
      id: 1,
      title: "Organization",
      name: "HIMATIF",
      image: forensikImage,
      instagram: "https://www.instagram.com/p/C4nPK3VxfTv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      position: "Member of the Forensic Department",
      activity: "During my time as part of himatif, I participated in many committee events held in the department.",
    },
    {
      id: 2,  
      title: "Event",
      name: "SIMATIF",
      image: simatifImage,
      instagram: "https://www.instagram.com/p/C8uHVQzplqs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      position: "Executive Vice Chairman",
      activity: "I organize the internal part of the committee and supervise and liaise with the committee, the chairperson, and outside parties.",
    },
    {
      id: 3,
      title: "Intern",
      name: "SECOM INFOTECH",
      image: secominfotechImage,
      instagram: "https://www.instagram.com/secom_infotech/",
      position: "Apprentice",
      activity: "I became part of the technicians at Secom Infotech, where I gained valuable experience in laptop installation, laptop repair, and various other technical tasks.",
    },
];
  
function Experiences() {
    return (
      <div className="bg-black text-white py-20" id="experiences">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Experiences</h2>

          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exp.map((exp) => (
              <div key={exp.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105">
                <img src={exp.image} alt={exp.name} className="rounded-lg mb-4 
                w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <a href={exp.instagram} className="inline-block bg-gradient-to-r 
                from-purple-400 to-cyan-500 text-white px-4 py-2 rounded-full" target="_blank" 
                rel="noopener noreferrer">Read More</a>
              </div>
            ))}
          </div>

          <table className="mt-12 w-full text-white border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 px-4 py-2">Experiences</th>
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Position</th>
                <th className="border border-gray-600 px-4 py-2">Activity</th>
              </tr>
            </thead>
            <tbody>
              {exp.map((exp) => (
                <tr key={exp.id} className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-2">{exp.title}</td>
                  <td className="border border-gray-600 px-4 py-2">{exp.name}</td>
                  <td className="border border-gray-600 px-4 py-2">{exp.position}</td>
                  <td className="border border-gray-600 px-4 py-2">{exp.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};
  
export default Experiences;
