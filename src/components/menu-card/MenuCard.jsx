import React from "react";
import style from "./MenuCard.module.scss";
import { Link } from "react-router-dom";

const MenuCard = ({ dish }) => {
  const { name, description, price, id } = dish;
  return (
    <div className={style.card}>
      <div className={style.dish}>
        <img src="/icons/dish.svg" alt="icon" width={30} height={30} />
      </div>

      <div className={style.imgContent}>
        {/* <img src={`../../assets/img/dish-${id}.webp`} alt={name} /> */}
        <img src={`/img/dish-${id}.webp`} alt={name} width={300} height={300} />
      </div>
      <div className={style.text}>
        <h5 className={style.name}>{name}</h5>
        <span className={style.price}>${price}</span>
        <p className={style.description}>{description}</p>
        <div className={style.ctaContainer}>
          <Link
            to={"/booking"}
            className={style.cta}
            aria-label="button"
            type="button"
          >
            Order a delivery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
