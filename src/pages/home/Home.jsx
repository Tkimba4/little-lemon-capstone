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
            <div className={style.heroText}>
              <h1 className={`title ${style.title}`}>Little Lemon</h1>
              <p className={`subTitle ${style.subTitle}`}>Chicago</p>
              <div className={style.heroDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                ipsam aperiam consectetur obcaecati error nihil veritatis? Error
                temporibus explicabo minus culpa reprehenderit, minima
                reiciendis sint, aliquid quisquam unde eum nisi!
              </div>
              <div className="hero-cta">
                <Link to="/booking" className="btn btn-primary">
                  Order
                </Link>
              </div>
            </div>
            <div className={style.heroImg}>
              <img src="/assets/restaurant.jpg" alt="Restaurant" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.menu}>
        <div className="container">
          <div className={style.menuContent}>
            <div className={style.menuTop}>
              <h2 className="title">Special</h2>
              <button className="btn">Online menu</button>
            </div>
            <div className={style.menuItemsContent}>
              {dishes.map((dish) => (
                <MenuCard key={dish.id} dish={dish} />
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
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="about" className={style.about}>
        <div className="container">
          <div className={style.aboutContent}>
            <div className={style.aboutText}>
              <h2 className={style.aboutTitle}>Little Lemon</h2>
              <p className={`${style.aboutSubtitle}`}>Chicago</p>
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
            <div className={style.aboutImgs}>
              <img
                src="img/about-1.jpg"
                alt="our resto"
                width={300}
                height={300}
              />
              <img
                src="img/about-2.jpg"
                alt="Mario and Adrian"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
