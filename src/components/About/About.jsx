import React from "react";
import "./aboutStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import { SiJavascript, SiReact, SiPython, SiNodedotjs, SiMysql, SiTableau } from "react-icons/si";
import { SiPlaystation } from "react-icons/si";
import { LuDumbbell, LuLaptop } from "react-icons/lu";
import { RiBookMarkedLine, RiBilliardsLine, RiSwordLine } from "react-icons/ri";
import { FaRegLightbulb, FaHamburger, FaHome } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      <FadeAnimation>
        <div className="section-header ">/ about me </div>
        <div className="about-content">
          <div className="about-blurb">
            <p>
              I am a Software Engineer crafting user-centric applications with strategies that unify viability and
              sophistication, balancing intricacy and simplicity for seamless experiences.
            </p>
            {"Here are some technologies I have been working with:"}
            <FadeAnimation delay="100ms">
              <ul className="tech-stack">
                <li>
                  <SiJavascript /> Javascript
                </li>
                <li>
                  <SiReact /> React
                </li>
                <li>
                  <SiNodedotjs /> Node.js
                </li>
                <li>
                  <SiPython /> Python
                </li>
                <li>
                  <SiMysql /> SQL
                </li>
                <li>
                  <SiTableau /> Tableau
                </li>
              </ul>
            </FadeAnimation>
            {"Outside of work these are some of my hobbies I have: "}
            <FadeAnimation delay="100ms">
              <ul className="hobby-stack">
                <li>
                  <RiSwordLine /> Anime
                </li>
                <li>
                  <SiPlaystation /> Gaming
                </li>
                <li>
                  <LuLaptop /> PC & Tech
                </li>
                <li>
                  <RiBookMarkedLine /> Reading
                </li>
                <li>
                  <LuDumbbell /> Fitness
                </li>
                <li>
                  <FaRegLightbulb /> Designing
                </li>
                <li>
                  <FaHamburger /> Foodie
                </li>
                <li>
                  <RiBilliardsLine /> Pool
                </li>
                <li>
                  <FaHome /> Homebody
                </li>
              </ul>
            </FadeAnimation>
          </div>
          <div className="about-selfie">
            <img alt="it me scott" src={"https://avatars.githubusercontent.com/u/91393924?v=4"} />
          </div>
        </div>
      </FadeAnimation>
    </section>
  );
};

export default About;
