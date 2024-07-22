import React from "react";

type ProjectPageProps = {
  title: string;
  desc: string;
  image: string;
  url?: string;
};

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  desc,
  image,
  url,
}) => {
  const handleRedirect = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="project-page">
      <h1>{title}</h1>
      <p>{desc}</p>
      <img src={image} alt={title} />
      <br />
      <br />
      {url && (
        <button onClick={handleRedirect} className="redirect-button">
          View Project
        </button>
      )}
    </div>
  );
};

export default ProjectPage;
