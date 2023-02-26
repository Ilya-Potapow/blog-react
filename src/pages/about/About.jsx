import React from "react";
import "./About.css";
import image from "./../../assets/about/about.png";
import {
  gitHub,
  google,
  telegram,
  css,
  html,
  figma,
  js,
  react,
  git,
  wp,
  reactRouter,
} from "./../../assets/about/tech";

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
        <div className="about-contacts">
          <h2 className="contact-title">Contacts</h2>
          <ul className="about-contact__list">
            <li className="about-contact__item">
              <a
                href="https://github.com/Ilya-Potapow"
                target="_blank"
                className="about-link"
              >
                <img src={gitHub} alt="" />
              </a>
            </li>
            <li className="about-contact__item">
              <a
                href="mailto:potapow.ilay22@gmail.com"
                target="_blank"
                className="about-link"
              >
                <img src={google} alt="" />
              </a>
            </li>
            <li className="about-contact__item">
              <a
                href="https://t.me/mvPotap"
                target="_blank"
                className="about-link"
              >
                <img src={telegram} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="about-tech">
          <h2 className="tech-title">Stack</h2>
          <ul className="tech-list">
            <li className="about-tech__item">
              <img src={html} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={css} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={js} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={react} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={reactRouter} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={wp} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={git} alt="" />
            </li>
            <li className="about-tech__item">
              <img src={figma} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
