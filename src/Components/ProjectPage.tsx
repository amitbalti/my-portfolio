import React from "react";

type ProjectPageProps = {
  title: string;
  longDesc: string;
  image: string;
  url?: string;
};

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  longDesc,
  image,
  url,
}) => {
  const handleRedirect = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const longDescLines = longDesc.split("\n");

  return (
    <div className="project-page">
      <br />
      <h1>{title}</h1>
      <img src={image} alt={title} className="project-image" />
      <br />
      {longDescLines.map((line, index) => (
        <p key={index} className="project-desc-line">
          {line}
        </p>
      ))}
      {url && (
        <button onClick={handleRedirect} className="redirect-button">
          View Project
        </button>
      )}
    </div>
  );
};

export default ProjectPage;
