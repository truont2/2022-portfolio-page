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
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
          <GitHubIcon />
        </IconButton>
        <p>GitHub</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="LinkedIn" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <p>LinkedIn</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="facebook" color="inherit">
          <FacebookIcon />
        </IconButton>
        <p>Facebook</p>
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

              {/* icon section */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="github icon"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="linkedIn icon"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="facebook icon"
                  color="inherit"
                >
                  <FacebookIcon />
                </IconButton>
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
