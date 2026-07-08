import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="Projects"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom-2"
      style={{
        backgroundImage: `linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
                      linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)`
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">PROJECTS</h2>
        <div className="w-35 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-3 text-sm font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-3 pt-2 text-xs line-clamp-3">
                {project.description}
              </p>
              <div>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-xl overflow-hidden relative">
            <div className="flex justify-end p-3">
              <button
                onClick={handleCloseModal}
                className="text-white text-4xl font-semibold cursor-pointer hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-6 p-4">
                <h3 className="lg:text-2xl text-base font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 lg:text-xs text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-5 lg:py-2 px-2 py-1 rounded-xl lg:text-base text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-5 lg:py-2 px-2 py-1 rounded-xl lg:text-base text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;