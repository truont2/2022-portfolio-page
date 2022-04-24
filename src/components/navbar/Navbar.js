import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenterOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./navbar.css";

const ResponsiveAppBar = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const styles = {
    active: {
      transition: "0.5s",
    },
  };
  

  return (
    <div id="navbar" style={styles.active}>
      <CssBaseline />
      {/* <HideOnScroll> */}
      {/* className={!trigger ? "navbar" : "navbarActive"} */}
      {/* style={trigger ? styles.active : ''} */}
      <AppBar className={!trigger ? "navbar" : "navbarActive"}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className="navLinks">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", md: "flex" } }}
              className="h2"
            >
              Takara Truong
            </Typography>

            {/* spacer */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

            {/* link section */}
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <a href="#Home">
                <IconButton
                  size="large"
                  aria-label="home icon"
                  color="inherit"
                  className="iconButton"
                >
                  <HomeIcon />
                </IconButton>
              </a>
              <a href="#About">
                <IconButton
                  size="large"
                  aria-label="about icon"
                  color="inherit"
                  onClick={() => (window.href = "#about")}
                  className="iconButton"
                >
                  <PersonOutlineIcon />
                </IconButton>
              </a>

              <a href="#Experiences">
                <IconButton
                  size="large"
                  aria-label="Experience icon"
                  color="inherit"
                  className="iconButton"
                >
                  <BusinessCenterIcon />
                </IconButton>
              </a>

              <a href="#Projects">
                <IconButton
                  size="large"
                  aria-label="work icon"
                  color="inherit"
                  className="iconButton"
                >
                  <FolderOpenOutlinedIcon />
                </IconButton>
              </a>
              <a href="#Contact">
                <IconButton
                  size="large"
                  aria-label="Contact icon"
                  color="inherit"
                  className="iconButton"
                >
                  <ContactPhoneOutlinedIcon />
                </IconButton>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* </HideOnScroll> */}
    </div>
  );
};

export default ResponsiveAppBar;
