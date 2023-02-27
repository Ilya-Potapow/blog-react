import React from "react";
import {
  css,
  html,
  figma,
  js,
  react,
  git,
  wp,
  reactRouter,
} from "./../../../assets/about/tech";
import "./TechList.css"

const TechList = () => {
  const techList = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "React Router",
      icon: reactRouter,
    },
    {
      name: "WebPack",
      icon: wp,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  return (
    <div className="about-tech">
      <h2 className="tech-title">Stack</h2>
      <ul className="tech-list">
        {techList.map((tech) => (
          <li key={tech.name} className="about-tech__item">
            <img src={tech.icon} alt={tech.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
