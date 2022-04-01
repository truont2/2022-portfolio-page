import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "./header.css";
import Typed from "react-typed";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Resume from "../../assets/Resume.pdf";

import Lott from "../Lottie/Lottie.js";
import codingAnimation from "../Lottie/coding.json";

const theme = createTheme();

export default function Header() {
  return (
    <div className="header-section work" id="Home">
      {/* <Part /> */}
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
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
                <Typography
                  variant="h5"
                  align="center"
                  color="inherit"
                  paragraph
                >
                  A passionate Full Stack Web Developer having an experience of
                  building Web applications with JavaScript / Reactjs / Nodejs /
                  SQL and some other cool libraries.
                </Typography>
                <Stack
                  sx={{ p: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  color="blue"
                >
                  <a href="https://github.com/truont2" target="_blank">
                    <IconButton
                      className="icon"
                      size="large"
                      aria-label="Github"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </a>
                  <a href="https://www.linkedin.com/in/takaratruong/" target="_blank">
                    <IconButton
                      className="icon"
                      size="large"
                      aria-label="Github"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </a>
                  <a href="https://www.facebook.com/takara.truong.58" target="_blank">
                    <IconButton
                      className="icon"
                      size="large"
                      aria-label="Github"
                    >
                      <FacebookIcon />
                    </IconButton>
                  </a>
                </Stack>
                <Stack
                  sx={{ p: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  color="blue"
                >
                  <a href={Resume} download={Resume}>
                    <Button className="buttons">DOWNLOAD RESUME</Button>
                  </a>
                  <a href="#Contact">
                    <Button className="buttons contact">CONTACT ME</Button>
                  </a>
                </Stack>
              </Container>
            </Box>
          </Grid>
          <Grid item>
            <Lott animationData={codingAnimation} size={500} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
