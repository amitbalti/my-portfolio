import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  url?: string;
};

type ProjectsProps = {
  showButton?: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ showButton = false }) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="projects" className="section">
      <h1>Projects</h1>
      <p>
        Below you can see two of my projects, and also, the entire website is
        based on React and TypeScript.
      </p>
      {showButton && (
        <button onClick={() => navigate("/projects")}>
          For the Projects, Click Here
        </button>
      )}

      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            onClick={() => navigate(`/project${project.id}`)}
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${project.image}`}
              alt={project.title}
            />
            <div className="overlay">
              <div className="project-desc">{project.shortDesc}</div>
              <div className="project-cta">Click to see my project →</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
