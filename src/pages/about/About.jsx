import React from "react";
import "./About.css";
import image from "./../../assets/about/about.png";
import Contacts from "../../components/UI/contacts/Contacts";
import TechList from "../../components/UI/techList/TechList";

const About = () => {
  return (
    <section className="about">
      <div className="about-info">
        <div className="about-title">About Work</div>
        <p className="about-subtitle">
          We excel in the business of human potential, and believe in its power
          to shape strategic, organizational, economic, and societal change. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
        <div className="about-text">
          Oh feel if up to till like. He an thing rapid these after going drawn
          or. Timed she his law the spoil round defer. In surprise concerns
          informed betrayed he learning is ye. Ignorant formerly so ye blessing.
        </div>
      </div>
      <div className="about-image">
        <img src={image} alt="" />
      </div>
      <div className="about-project">
        <Contacts />
        <TechList />
      </div>
    </section>
  );
};

export default About;
