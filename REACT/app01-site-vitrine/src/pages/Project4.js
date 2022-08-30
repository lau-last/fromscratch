import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <div>
      <main>
        <Mouse />
        <div className="project">
          <Navigation />
          <Logo />
          <Project projectNumber={3} />
          <Buttons left={"/projet-3"} right={"/contact"} />
        </div>
      </main>
    </div>
  );
};

export default Project4;
