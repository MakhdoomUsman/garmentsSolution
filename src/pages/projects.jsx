import BreadCrums from "@/components/ui/BreadCrums";
import OurAllProjects from "@/components/ui/OurAllProjects";
import OurProjects from "@/components/ui/OurProjects";
import Priorities from "@/components/ui/Priorities";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="">
        <BreadCrums name=" Our Projects" breadCrum={"All Projects"} />
        <OurAllProjects />
        <Priorities />
      </div>
    </div>
  );
};

export default Projects;
