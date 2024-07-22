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
  desc: string;
  image: string;
  url?: string;
};

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
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
                desc={project.desc}
                image={project.image}
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
