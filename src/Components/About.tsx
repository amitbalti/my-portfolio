import React from "react";
import { useNavigate } from "react-router-dom";

type AboutProps = {
  showButton?: boolean;
};

const About: React.FC<AboutProps> = ({ showButton = false }) => {
  const navigate = useNavigate(); // Hook to handle navigation programmatically
  console.log("About component rendered"); // This will log true on the Home page and undefined on the direct /about route

  return (
    <div id="about" className="section">
      <h1>About Me</h1>
      <p>This is the about section. Here you can add details about yourself.</p>
      {showButton && (
        <button onClick={() => navigate("/about")}>More About Me</button>
      )}
    </div>
  );
};

export default About;
