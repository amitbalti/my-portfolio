import React from "react";
import About from "./About";
import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <div>
      <About showButton={true} isHomePage={true} />
      <Projects showButton={true} />
    </div>
  );
};

export default Home;
