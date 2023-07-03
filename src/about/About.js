import React, { useState, useEffect } from "react";
import { useAppSelector, getUsersData } from "../store";
import Skills from "./skills";

const About = () => {
  const { basics } = useAppSelector(getUsersData);
  return (
    <section id="About" className="about">
      <header>
        <h1>About Me</h1>
      </header>
      <section id="bodyAbout">
        <div id="aboutMe" className="aboutMe">
          <div id="profileImage">
            <div>
              <img id="myImage" src={basics.image} />
            </div>
          </div>
          <div id="shortDesc">
            Hey, my name is Garvit and I love to create stuff that lives on web.
            My interest in web developement started for the first time when i
            decided to change the appearance of elements in browser using
            inspector tool. I thought i was doing some serious hacking but to my
            surprise, it turned out to be the genesis of my journey with the
            web. Fast forward to today, I've had the privilage to work with a
            huge corporation as a front end. Here are few technologies that I've
            been working with recently:
          </div>
        </div>
        <div id="skills">
          <Skills />
        </div>
      </section>
    </section>
  );
};
export default About;
