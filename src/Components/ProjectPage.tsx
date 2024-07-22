import React from "react";

type ProjectPageProps = {
  title: string;
  desc: string;
  image: string;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ title, desc, image }) => {
  return (
    <div className="project-page">
      <h1>{title}</h1>
      <p>{desc}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ProjectPage;
