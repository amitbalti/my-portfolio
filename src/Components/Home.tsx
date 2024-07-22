import React from "react";
import About from "./About";
import Projects from "./Projects";

const Home: React.FC = () => {
  console.log("Home component rendered");

  return (
    <div>
      <About showButton={true} />
      <Projects showButton={true} />
    </div>
  );
};

export default Home;
