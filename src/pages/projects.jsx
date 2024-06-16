import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar.jsx";

const projects = () => {
  const projectList = [
    {
      project_name: "Project 1",
      description: "Description of project 1.",
      role: "Developer",
      technologies_used: "React, Node.js",
      image: "/images/project1.jpg",
      link: "/projects/project1",
    },
    {
      project_name: "Project 2",
      description: "Description of project 2.",
      role: "Lead Developer",
      technologies_used: "Python, Django",
      image: "/images/project2.jpg",
      link: "/projects/project2",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="py-12 px-4 md:px-16">
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-800 mb-12"> 
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <Link href={project.link} key={index} passHref>
              <div className="relative cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.project_name}
                  width={400}
                  height={300}
                  className="rounded-t-lg"
                />
                <h2 className="text-2xl font-bold mt-4 mb-2 text-blue-ribbon-600">
                  {project.project_name}
                </h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-700 mb-4">Role: {project.role}</p>
                <p className="text-gray-700 mb-4">
                  Technologies used: {project.technologies_used}
                </p>
                <div className="absolute inset-0 bg-blue-ribbon-600 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default projects;
