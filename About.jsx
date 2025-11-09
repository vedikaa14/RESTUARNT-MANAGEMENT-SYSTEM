import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Deccan Delicious, where every dish tells a story. We’re passionate about bringing people together through food that’s crafted with care, flavor, and love. From fresh, locally sourced ingredients to recipes inspired by tradition and creativity, we believe great meals are more than just food — they’re memories waiting to happen. Whether you’re here for a casual bite, a family gathering, or a special celebration, our team is dedicated to making every visit a delightful experience. Step in, savor the aroma, and taste the difference that comes from cooking straight from the heart.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
