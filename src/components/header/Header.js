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
import Typist from "react-typist";

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
                    "I Love All My Subscribers",
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained">Main call to action</Button>
                </Stack>
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
