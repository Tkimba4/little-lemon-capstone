import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.top}>
          <div className={style.img}>
            <img src="img/footer.png" alt="logo" width={100} height={100} />
          </div>
          <div className={style.navigation}>
            <h3 className={style.title}>Navigation</h3>
            <ul>
              {navigations.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.contacts}>
            <h3 className={style.title}>Contact</h3>
            <ul>
              {contacts.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.socials}>
            <h3 className={style.title}>Social</h3>
            <ul className={style.social}>
              {social.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.bottom}>
          <p>
            ©{2025} <span>Little Lemon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const navigations = [
  "Home",
  "About",
  "Menu",
  "Reservation",
  "Order online",
  "Login",
];
const contacts = [
  "+243 89 123 456",
  "123 Limete Gombe - Kinshasa",
  "thanks.odcrdc@coursera.inu",
];

const social = ["facebook", "twitter", "instagram", "linkedin"];

export default Footer;
