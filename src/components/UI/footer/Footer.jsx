import React from "react";
import "./Footer.css";
import footerLogo from "./../../../assets/footer/nordic_rose.svg";
const Footer = () => {
  const footerLinks = [
    "Digital product design",
    "Remote work",
    "UX design",
    "Distributed teams",
    "Creativity",
    "Strategy",
    "Suspense",
    "Growth",
    "UI",
    "Front-end",
    "Blog concepts",
    "News feed",
    "React blog page",
    "Pet project",
  ];
  return (
    <footer>
      <marquee className="footer-line">
        {footerLinks.map((link, index) => (
          <span key={index}>{link}</span>
        ))}
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
