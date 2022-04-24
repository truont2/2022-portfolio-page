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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Resume from "../../assets/Takara_Truong_Resume.pdf";
import Navbar from '../navbar/Navbar'

import Lott from "../Lottie/Lottie.js";
import codingAnimation from "../Lottie/coding.json";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: '3.75rem',
  '@media (max-width:425px)': {
    fontSize: '2.5rem',
  },
};
theme.typography.h4 = {
  fontSize: '2.125rem',
  '@media (max-width: 425px)': {
    fontSize: '1.75rem',
  },
};

export default function Header() {
  return (
    <div className="header-section work" id="Home">
      {/* <Part /> */}
      <CssBaseline />
      <Navbar />
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
              <ThemeProvider theme={theme}>
              <Typography
                  variant="h4"
                  align="center"
                  color="inherit"
                  paragraph
                  className="headerIntro"
                >
                  Hello, I'm
                </Typography>
                <Typography
                  variant="h2"
                  align="center"
                  color="inherit"
                  paragraph
                  className="headerName"
                >
                  Takara Truong
                </Typography>
                <Typography
                  variant="p"
                  align="center"
                  color="inherit"
                  paragraph
                >
                  Fullstack Developer
                </Typography>
              </ThemeProvider>
                <Stack
                  sx={{ p: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
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
