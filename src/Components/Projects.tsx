import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

type ProjectsProps = {
  showButton?: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ showButton = false }) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/projects.json")
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
      <p>This is the projects section. Showcase your work here.</p>
      {showButton && (
        <button onClick={() => navigate("/projects")}>More Projects</button>
      )}

      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            onClick={() => navigate(`/project${project.id}`)}
          >
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <div className="project-desc">{project.desc}</div>
              <div className="project-cta">Click to see my project →</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
