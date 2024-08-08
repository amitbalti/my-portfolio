import React from "react";
import { useNavigate } from "react-router-dom";

type AboutProps = {
  showButton?: boolean;
  text?: string;
  isHomePage?: boolean;
};

const About: React.FC<AboutProps> = ({
  showButton = false,
  text,
  isHomePage,
}) => {
  const navigate = useNavigate(); // Hook to handle navigation programmatically

  const renderText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className={isHomePage ? "" : "about-page"}>
        {line}
      </p>
    ));
  };

  const aboutPageText = `Hi, I'm Amit! I'm 26 years old and work as a front-end web developer. \nI have a background in full-stack development, which means I know both front-end and back-end technologies. I mostly use React and TypeScript in my daily work.\n
    I work for an international gambling company, maintaining over 10 websites. \nI've been with this company for a few years and in my current development role for a bit over a year.\nEven though I work remotely, I communicate with more than 15 people every day, which keeps me connected and engaged.\n
    I love working with others, learning new things, and always strive to improve myself. \nI believe in asking questions and constantly educating myself to stay ahead in the tech world. \nWhile my main strength is in front-end development, my full-stack knowledge helps me understand and work on various parts of web development projects. \nI'm always curious and committed to growing in my field.`;

  const homePageText = `Front-end developer with full-stack skills, always eager to learn, collaborate, and grow in the tech world.\n
    To learn more about me, click the button below \n ↓`;
  return (
    <div
      id="about"
      className={`section ${isHomePage ? "home-page" : "about-page"}`}
    >
      <h1>About Me</h1>
      <p>
        {text
          ? renderText(text)
          : renderText(showButton ? homePageText : aboutPageText)}
      </p>
      {showButton && (
        <button onClick={() => navigate("/about")}>Click Me 😊</button>
      )}
    </div>
  );
};

export default About;

// Hi, I'm Amit! I'm 26 years old and work as a front-end web developer. I have a background in full-stack development, which means I know both front-end and back-end technologies. I mostly use React and TypeScript in my daily work.

// I work for an international gambling company, maintaining over 10 websites. I've been with this company for a few years and in my current development role for a bit over a year. Even though I work remotely, I communicate with more than 15 people every day, which keeps me connected and engaged.

// I love working with others, learning new things, and always strive to improve myself. I believe in asking questions and constantly educating myself to stay ahead in the tech world. While my main strength is in front-end development, my full-stack knowledge helps me understand and work on various parts of web development projects. I'm always curious and committed to growing in my field.
