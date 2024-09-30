import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis proyectos
      </h1>
      <div className="h-auto w-auto flex flex-col px-[45px] py-[75px]">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Pagina web espacial"
          description="Pagina web con estetica y gamma de colores espaciales adaptada a modo de portafolio"
        />
      </div>
    </div>
  );
};

export default Projects;