import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import animation from "../../images/coding-freak.gif";
import "./header.css";
import Typed from "react-typed";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

const theme = createTheme();

export default function Header() {
  return (
    <ThemeProvider theme={theme} className="about">
      <CssBaseline />
      <div className="header container">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box
              sx={{
                bgcolor: "none",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm" className="header-text">
                <Typed
                  strings={[
                    "Hi, My name is Takara Truong",
                    "I'm a Full Stack Developer",
                    "I Love Software Development",
                    "Check out my Projects",
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
                <Typography
                  variant="h5"
                  align="left"
                  color="text.secondary"
                  paragraph
                >
                  A passionate Full Stack Web Developer and Mobile App Developer
                  having an experience of building Web applications with
                  JavaScript / Reactjs / Nodejs / Python and some other cool
                  libraries.
                </Typography>
                <Stack
                  sx={{ p: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  color="blue"
                >
                  <IconButton size="large" aria-label="Github" color="inherit">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton size="large" aria-label="Github" color="inherit" onClick={() => window.location.href="https://www.linkedin.com/in/takaratruong/"}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton size="large" aria-label="Github" color="inherit">
                    <FacebookIcon />
                  </IconButton>
                </Stack>
                <Button variant="contained">SEE MY RESUME</Button>
              </Container>
            </Box>
          </Grid>
          <Grid item>
            <img src={animation} alt="guy coding" className="headerImg" />
          </Grid>
        </Grid>
        {/* Hero unit */}
      </div>
    </ThemeProvider>
  );
}
