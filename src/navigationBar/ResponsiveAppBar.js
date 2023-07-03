import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["About", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [mobileView, setMobileView] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setOpenModal(true);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    const section = document.querySelector("#About");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // const releventDiv = document.getElementById(event.target.id);
    console.log(event);
    setOpenModal(false);
    // console.log(releventDiv);
    // // behavior: "smooth" parameter for smooth movement
    // releventDiv.scrollIntoView({ behavior: "smooth" });
    // setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      className={mobileView ? "" : "blurBackground"}
      sx={
        mobileView
          ? { bgcolor: "transparent", boxShadow: "none", color: "black" }
          : { bgcolor: "hsla(0,0%,9%,.5)" }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <IconButton
              size="medium"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="end"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={openModal}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a href={`/#${page}`} textAlign="center">
                    {page}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`/#${page}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
