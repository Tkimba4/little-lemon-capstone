import React from "react";
import style from "./BreadCrumb.module.scss";
import { Link } from "react-router-dom";
const BreadCrumb = ({ title }) => {
  return (
    <div className={style.breadcrumb}>
      <div className="container">
        <div className={style.breadcrumbContent} data-aos="fade-right" data-aos-duration="500">
          <h1 className={`title ${style.title}`}>{title}</h1>
          <p className={style.subtitle}>
            <Link className={style.link} to="/">
              Home
            </Link>{" "}
            {` > `} <span className={style.current}>{title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
