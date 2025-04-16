import React from "react";
import style from "./TestimonialCard.module.scss";

const TestimonialCard = ({ testimonial, ...props }) => {
  const { name, text, id, sex } = testimonial;

  return (
    <div className={style.card} {...props}>
      <div className={style.profil}>
        <img
          src={`https://randomuser.me/api/portraits/${sex}/${id}.jpg`}
          alt={name}
          width={100}
          height={100}
        />
        <span className={style.name}>{name}</span>
        {/* <span className={style.username}>{username}</span> */}
      </div>
      <p className={style.comment}>{text}</p>
    </div>
  );
};

export default TestimonialCard;
