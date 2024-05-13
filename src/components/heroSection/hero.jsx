import React from "react";
import "./hero.css";
import Header from "../Header/header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "string", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur  hero-blur"></div>
      <div className="left-hero">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "158px" : "210px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best fitness club in town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={700} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={20} delay="4" preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-hero">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          transition={transition}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          transition={transition}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        <motion.div
          initial={{ right: "37rem" }}
          transition={transition}
          whileInView={{ right: "28rem" }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Caloreis Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
