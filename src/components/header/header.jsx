import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
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
          <div className={style.btnContent}>
            <button
              type="button"
              aria-label="menu"
              role="menu"
              className={style.btnMenu}
            >
              clicl
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
