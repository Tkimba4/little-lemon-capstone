import React from "react";
import style from "./MenuCard.module.scss";

const MenuCard = ({ dish }) => {
  const { name, description, price } = dish;
  return (
    <div className={style.card}>
      <div className={style.imgContent}>
        {/* <img src={`../../assets/img/dish-${id}.webp`} alt={name} /> */}
        <img src="/s/favicon.png" alt={name} />
      </div>
      <div className={style.text}>
        <h5 className={style.name}>{name}</h5>
        <span className={style.price}>${price}</span>
        <p className={style.description}>{description}</p>
        <div className={style.ctaContainer}>
          <button className={style.cta} aria-label="button" type="button">
            <span>Order a delivery</span>
            <img src="icons/delivery.svg" alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
