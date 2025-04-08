import React from "react";
import style from "./BreadCrumb.module.scss";
import { Link } from "react-router-dom";
const BreadCrumb = ({ title }) => {
  return (
    <div className={style.breadcrumb}>
      <div className="container">
        <div className={style.breadcrumbContent}>
          <h1 className={`title ${style.title}`}>{title}</h1>
          <p className={style.subtitle}>
            <Link className={style.link} to="/">
              Home
            </Link>{" "}
            {` > `} <spa className={style.current}>{title}</spa>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
