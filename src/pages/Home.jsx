import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="text">
                            <h1 className="page-title">Little Lemon</h1>
                            <p className="subtitle">Chicago</p>
                            <div className="hero-description">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ipsam aperiam consectetur obcaecati error nihil veritatis? Error temporibus explicabo minus culpa reprehenderit, minima reiciendis sint, aliquid quisquam unde eum nisi!
                            </div>
                            <div className="hero-cta">
                                <Link to="/booking" className="btn btn-primary">Order</Link>
                            </div>
                        </div>
                        <div className="img">
                            <img src="/assets/restaurant.jpg" alt="Restaurant" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="specials">
                <div className="">
                    h
                </div>
            </section>
        </>
    );
}

export default Home;
