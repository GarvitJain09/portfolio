import React, { useState, useEffect } from "react";
import { IconButton, Container, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { useAppSelector, getUsersData } from "../store";
import { AvatarSVG, CodeSandBox } from "../images/imageSvg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Garvit_Resume from "../utils/Garvit_Resume.pdf";
const HeroSection = () => {
  const { basics, work } = useAppSelector(getUsersData);
  return (
    <Container maxWidth="xl">
      <section id="hero" className="centerDiv">
        <div id="homeContent" className="hero">
          <h1>I'm {basics.name}</h1>
          <p>
            I'm a India based <strong>UI Developer</strong>, currently working
            at <strong>{work[0].name}</strong> helping build a modern UI.
          </p>
          <div>
            <IconButton
              className="colorWhite"
              href="https://github.com/GarvitJain09"
              target="_blank"
            >
              <GitHubIcon className="github" />
            </IconButton>
            <IconButton
              className="colorWhite"
              href="https://codesandbox.io/u/garvitjain09"
              target="_blank"
            >
              <CodeSandBox />
            </IconButton>
            <IconButton
              className="colorWhite"
              target="_blank"
              href="https://wa.me/+918979918969"
            >
              <WhatsAppIcon className="whatsapp" />
            </IconButton>
            <IconButton
              className="colorWhite"
              href="https://www.linkedin.com/in/garvit-jain/"
              target="_blank"
            >
              <LinkedInIcon className="linkedin" />
            </IconButton>
          </div>
          <div className="flex w-full justify-center gap-x-4">
            <Button
              variant="outlined"
              className="btnClass"
              href={Garvit_Resume}
              target="_blank"
            >
              <DownloadIcon /> Resume
            </Button>
            <Button variant="outlined" className="btnClass" href="#contactMe">
              Contact
            </Button>
          </div>
        </div>
        <div className="avatar">
          <AvatarSVG />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
