import React, { useState, useEffect } from "react";
import { IconButton, Container, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import webDevelopment from "../images/webDevelopment.png";
import { useAppSelector, getUsersData } from "../store";
import { AvatarSVG, CodeSandBox } from "../images/imageSvg";
const HeroSection = () => {
  const { basics } = useAppSelector(getUsersData);
  console.log(basics, "this is hero");
  return (
    <section id="hero" className="centerDiv">
      <div id="homeContent" className="hero">
        <h1>I'm {basics.name}</h1>
        <p>
          I'm a India based <strong>UI Developer</strong>, currently working at{" "}
          <strong>Xactly Corporation </strong> helping build a modern UI.
        </p>
        <div>
          <IconButton
            className="colorWhite"
            href="https://github.com/GarvitJain09"
          >
            <GitHubIcon className="github" />
          </IconButton>
          <IconButton
            className="colorWhite"
            href="https://codesandbox.io/u/garvitjain09"
          >
            <CodeSandBox />
          </IconButton>
          <IconButton
            className="colorWhite"
            href="https://www.linkedin.com/in/garvit-jain/"
          >
            <LinkedInIcon className="linkedin" />
          </IconButton>
        </div>
        <div className="flex w-full justify-center gap-x-4">
          <Button variant="outlined" className="btnClass">
            <DownloadIcon /> Resume
          </Button>
          <Button variant="outlined" className="btnClass" href="#contact">
            Contact
          </Button>
        </div>
      </div>
      <div className="avatar">
        <AvatarSVG />
      </div>
    </section>
  );
};

export default HeroSection;
