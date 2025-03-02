import React from "react";

const skl = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building modern web applications using React.js & Tailwind CSS.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing APIs and databases with Node.js and Express.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining frontend and backend skills to build complete applications.",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with React Native.",
  },
  {
    id: 6,
    title: "Database Management",
    description: "Handling databases like MySQL, PostgreSQL, and Firebase.",
  },
];


function Skills() {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skl.map((skl) => (
            <div
              key={skl.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-600 to-cyan-400"
              >
                {skl.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-cyan-500">
                {skl.title}
              </h3>
              <p className="mt-2 text-gray-300">{skl.description}</p>
              <a href="#" className="mt-4 inline-block text-white-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;