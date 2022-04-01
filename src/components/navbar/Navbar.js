import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import MoreIcon from "@mui/icons-material/MoreVert";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenterOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import "./navbar.css";

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className="mobile-nav"
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        className="h2"
      >
        Takara Truong
      </Typography>
      <hr />
      <MenuItem>
        <IconButton size="large" aria-label="Github" color="inherit">
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="LinkedIn" color="inherit">
          <PersonOutlineIcon />
        </IconButton>
        <p>About Me</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="facebook" color="inherit">
          <BusinessCenterIcon />
        </IconButton>
        <p>Experience</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="facebook" color="inherit">
          <FolderOpenOutlinedIcon />
        </IconButton>
        <p>Projects</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="facebook" color="inherit">
          <HandshakeOutlinedIcon />
        </IconButton>
        <p>Services</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="facebook" color="inherit">
          <ContactPhoneOutlinedIcon />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
    </Menu>
  );

  const useStyles = makeStyles({
    root: {
      background: "#22313F",
    },
  });

  const classes = useStyles();
  // change the nav bar to scroll to the section on interest
  return (
    <React.Fragment className="navbar">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="navbar">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "flex", md: "flex" } }}
                className="h2"
              >
                Takara Truong
              </Typography>

              {/* spacer */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

              {/* link section */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <a href="#Home">
                <IconButton
                  size="large"
                  aria-label="home icon"
                  color="inherit"
                >
                  <HomeIcon />
                </IconButton>
                </a>
                <a href="#About">
                <IconButton
                  size="large"
                  aria-label="about icon"
                  color="inherit"
                  onClick={() => window.href="#about"}
                >
                  <PersonOutlineIcon />
                </IconButton>
                </a>
                
                <a href="#Experience">
                <IconButton
                  size="large"
                  aria-label="Experience icon"
                  color="inherit"
                >
                  <BusinessCenterIcon />
                </IconButton>
                </a>
                
                <a href="#Projects">
                <IconButton
                  size="large"
                  aria-label="work icon"
                  color="inherit"
                >
                  <FolderOpenOutlinedIcon />
                </IconButton>
                </a>
                <a href="#Services">
                <IconButton
                  size="large"
                  aria-label="services icon"
                  color="inherit"
                >
                  <HandshakeOutlinedIcon />
                </IconButton>
                </a>
                <a href="#Contact">
                <IconButton
                  size="large"
                  aria-label="Contact icon"
                  color="inherit"
                >
                  <ContactPhoneOutlinedIcon />
                </IconButton>
                </a>
              </Box>

              {/* renders the 3 dots  */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>

                {renderMobileMenu}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
