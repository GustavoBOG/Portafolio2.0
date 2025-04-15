import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState("PokeDex");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PokeDex",
      description: "Consulta Pokémon",
      imageUrl: "/images/PokeDex.png",
      fullDescription:
        "Una web interactiva que funciona como una Pokedex, utilizando una api pública de Pokémon para obtener y mostrar la información detallada sobre cada Pokémon.",
      technologies: ["HTML5", "CSS", "JavaScript"],
      api: "https://pokeapi.co",
      githubUrl: "https://github.com/GustavoBOG/Pokedex",
      pageUrl: "https://poke-evo-lution.vercel.app/",
    },
    {
      id: 2,
      title: "Rick & morty",
      description: "Buscador de Personajes",
      imageUrl: "/images/rick&morty.png",
      fullDescription:
        "Una web interactiva que permite explorar todos los personajes de la serie Rick and Morty. Utiliza una API pública para obtener y mostrar información detallada sobre cada personaje ",
      technologies: ["HTML5", "CSS", "JavaScript", "React"],
      api: " https://rickandmortyapi.com",
      githubUrl: "https://github.com/GustavoBOG/Rick-morty",
      pageUrl: "https://rick-morty-nine-tau.vercel.app/",
    },
    {
      id: 3,
      title: "WonderFly",
      description: "Buscador de Vuelos",
      imageUrl: "/images/plane.png",
      fullDescription:
        "Es una aplicación web desarrollada desde cero para buscar y comparar vuelos de manera rápida y sencilla. Integra los conocimientos de frontend, backend, diseño de bases de datos y uso de APIs. En ella puedes realizar búsquedas detalladas, aplicar filtros personalizados y guardar vuelos favoritos en una interfaz intuitiva. El objetivo es ofrecer una plataforma accesible y segura para gestionar búsquedas y vuelos favoritos.",
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "React",
        "MySQL",
        "Node.js",
        "Express",
      ],
      api: "https://developers.amadeus.com",
      githubUrl: "https://github.com/GustavoBOG/planificadorDeViajes",
      pageUrl: "https://github.com/GustavoBOG/planificadorDeViajes",
    },
  ];

  const currentProject = selectedProject
    ? projects.find((p) => p.title === selectedProject)
    : projects.find((p) => p.title === hoveredProject);

  const handleBack = () => {
    setSelectedProject(null);
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:mt-32">
        {/* Proyectos destacados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contenedor de la imagen destacada */}
          <div className="relative flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[350px]">
            <div
              className="absolute w-[90%] h-[120%] rounded-2xl"
              style={{
                background:
                  "linear-gradient(30deg, #1C4470 35%, #2963A3 50%, #1C4470 75%)",
                boxShadow: "13px 13px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            ></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {projects.map((project) => (
                <img
                  key={project.id}
                  src={project.imageUrl}
                  alt={project.title}
                  className={`absolute w-full h-auto object-contain transition-opacity duration-300 ease-in-out ${
                    selectedProject === project.title ||
                    (!selectedProject && hoveredProject === project.title)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Lista de proyectos o vista detallada */}
          {selectedProject ? (
            <div className="space-y-6">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={handleBack}
              >
                <FaArrowLeft className="text-text text-h2" />
              </div>

              <p className="text-text text-h5 text-justify">
                {currentProject?.fullDescription}
              </p>

              <div>
                <h4 className="text-text text-h3 font-roboto mb-2">
                  Tecnologías usadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-vividBlue text-white px-3 py-1 rounded-full text-h6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {currentProject?.api && (
                <div>
                  <p className="text-text text-h4">
                    API:{" "}
                    <a href={currentProject.api} className="text-primario">
                      {currentProject.api}
                    </a>
                  </p>
                </div>
              )}

              <div className="flex gap-6 flex-wrap items-center justify-start mt-4">
                <a
                  href={currentProject?.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGlobe className="text-text text-h2" />
                </a>
                <a
                  href={currentProject?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-text text-h2" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-text/100 pb-4 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject("PokeDex")}
                  onClick={() => setSelectedProject(project.title)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-start overflow-hidden">
                      <FaArrowRight
                        className={`text-text text-h1 transition-all duration-300 ease-in-out ${
                          hoveredProject === project.title
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                      />
                    </div>
                  </div>
                  <p className="text-text text-h6 opacity-80">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
