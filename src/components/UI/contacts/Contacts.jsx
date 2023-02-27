import React from "react";
import { gitHub, google, telegram } from "./../../../assets/about/tech";
import "./Contacts.css";

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: "GitHub",
      icon: gitHub,
      link: "https://github.com/Ilya-Potapow",
    },
    {
      id: 2,
      name: "Google",
      icon: google,
      link: "mailto:potapow.ilay22@gmail.com",
    },
    {
      id: 3,
      name: "Telegram",
      icon: telegram,
      link: "https://t.me/mvPotap",
    },
  ];
  return (
    <div className="about-contacts">
      <h2 className="contact-title">Contacts</h2>
      <ul className="about-contact__list">
        {contacts.map((contact) => (
          <li key={contact.id} className="about-contact__item">
            <a href={contact.link} target="_blank" className="about-link">
              <img src={contact.icon} alt={contact.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
