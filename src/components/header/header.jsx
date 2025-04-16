import React from "react";
import style from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
const navigations = [
  { name: "Home", link: "" },
  { name: "About", link: "" },
  { name: "Menu", link: "" },
  { name: "Reservation", link: "booking" },
  { name: "Order Online", link: "" },
  { name: "Login", link: "" },
];

function handleClick(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.classList.toggle(style.btnActive);
  const nav = document.querySelector(`.${style.nav}`);
  nav.classList.toggle(style.open);
}
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContent}>
          <div className={style.logo}>
            <Link to="/" className={style.logoLink}>
              <img src="/img/logo.png" alt="logo" width={200} height={200} />
            </Link>
          </div>

          <nav className={style.nav}>
            <ul className={style.navList}>
              {navigations.map((item, index) => (
                <li key={index} className={style.navItem}>
                  <NavLink
                    to={`/${item.link}`}
                    className={style.navLink}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={style.btnContent}>
            <button
              type="button"
              aria-label="menu"
              role="menu"
              className={style.btnMenu}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
