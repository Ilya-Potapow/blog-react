import React from "react";
import "./Footer.css";
import footerLogo from "./../../../assets/footer/nordic_rose.svg";
const Footer = () => {
  return (
    <footer>
      <marquee className="footer-line">
        <span>Digital product design</span>
        <span>Remote work</span>
        <span>UX design</span>
        <span>Distributed teams</span>
        <span>Creativity</span>
        <span>Strategy</span>
        <span>Suspense</span>
        <span>Growth</span>
        <span>UI</span>
        <span>Front-end</span>
        <span>Blog concepts</span>
        <span>News feed</span>
        <span>React blog page</span>
        <span>Pet project</span>
      </marquee>
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
      </div>
      <div className="footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </div>
      <div className="footer-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">RSS</a>
      </div>
      <div className="footer-copyrights">
        <p>© 2012–2020 Nordic Rose Co. &#169;All rights reserved.</p>
        <a href="https://www.figma.com/@mikam">Template AUTHOR </a>
      </div>
    </footer>
  );
};

export default Footer;
