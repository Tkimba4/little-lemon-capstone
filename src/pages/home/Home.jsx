import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import TestimonialCard from "../../components/testimonial-card";
import testimonials from "../../data/testimonials.jsx";
import dishes from "../../data/dishes.jsx";
import MenuCard from "../../components/menu-card/MenuCard.jsx";
import usePageTitle from "../../hooks/usePageTitle.jsx";
const Home = () => {
  usePageTitle("Home");
  return (
    <>
      <section className={style.hero}>
        <div className="container">
          <div className={style.heroContent}>
            <div
              className={style.heroText}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h1 className={`title ${style.heroTitle}`}>Little Lemon</h1>
              <p className={`subtitle ${style.heroSubtitle}`}>Chicago</p>
              <p className={style.heroDescription}>
                Little Lemon is a family-owned Mediterranean restaurant, focused
                on traditional recipes served with a modern twist. We take pride
                in our fresh ingredients and authentic flavors, ensuring that
                every dish is a delightful experience for our guests.
              </p>
              <div className={style.heroCta}>
                <Link to="/booking" className="btn btn-primary">
                  Reserve a table
                </Link>
              </div>
            </div>
            <div className={style.heroImg}>
              <img
                src="/img/hero.jpg"
                alt="Restaurant"
                width={300}
                height={300}
                loading="lazy"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.menu}>
        <div className="container">
          <div className={style.menuContent}>
            <div className={style.menuTop}>
              <h2 className="title">Specials</h2>
              <button className="btn">Online menu</button>
            </div>
            <div className={style.menuItemsContent}>
              {dishes.map((dish, index) => (
                <MenuCard
                  key={dish.id}
                  dish={dish}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={`${index - 1}00`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={style.testimonials}>
        <div className="container">
          <div className={style.testimonialsContent}>
            <h2 className={style.testimonialsTitle}>Testimonails</h2>
            <div className={style.testimonialsItemsContent}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={`${index - 1}00`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="about" className={style.about}>
        <div className="container">
          <div className={style.aboutContent}>
            <div
              className={style.aboutText}
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h2 className={`title ${style.aboutTitle}`}>Little Lemon</h2>
              <p className={`subtitle ${style.aboutSubtitle}`}>Chicago</p>
              <p className={style.description}>
                little lemon is a family-owned Mediterranean restaurant, focused
                on traditional recipes served with a modern twist. We take pride
                in our fresh ingredients and authentic flavors, ensuring that
                every dish is a delightful experience for our guests. Our
                restaurant is a warm and inviting space, perfect for family
                gatherings, romantic dinners, or casual lunches with friends.
                Our friendly staff is dedicated to providing exceptional
                service, making sure that every visit is memorable.
              </p>
            </div>
            <div
              className={style.aboutImgs}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src="/img/about-2.webp"
                alt="our resto"
                width={300}
                height={300}
                loading="lazy"
              />
              <img
                src="/img/about-1.webp"
                alt="Mario and Adrian"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
