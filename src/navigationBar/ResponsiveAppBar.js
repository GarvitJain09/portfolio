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

const pages = [
  { name: "About", id: "About" },
  { name: "Work Experience", id: "workEx" },
  { name: "Project", id: "projects" },
];

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
    console.log(event.target);
    const section = document.querySelector("#About");
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    console.log(event);
    setOpenModal(false);
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
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <a href={`/#${page.id}`} textAlign="center">
                    {page.name}
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
                key={page.id}
                onClick={handleCloseNavMenu}
                href={`/#${page.id}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
