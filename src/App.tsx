import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Page404 from "./Components/Page404";
import Home from "./Components/Home";
import ProjectPage from "./Components/ProjectPage";
import "./styles.css";

type Project = {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  url?: string;
};

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About showButton={false} />} />
        <Route path="/projects" element={<Projects showButton={false} />} />
        {projects.map((project) => (
          <Route
            key={project.id}
            path={`/project${project.id}`}
            element={
              <ProjectPage
                title={project.title}
                longDesc={project.longDesc}
                image={`assets/${project.image}`}
                url={project.url}
              />
            }
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
