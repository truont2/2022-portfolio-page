import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./about.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import data from "../../data";
import Fade from "react-reveal/Fade";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const theme = createTheme();

export default function ComplexGrid() {
  return (
    <div className="container" id="About">
      <CssBaseline />
      <Typography variant="h3" align="center" color="text.secondary" paragraph>
        About Me
      </Typography>
      <Fade right>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="About"
        >
          <Grid item xs={12} sm={4} md={4}>
              <img alt="me" src={data.aboutImage} className="aboutImg" />
          </Grid>

          <Grid item xs={12} sm={4} md={4} container className="aboutText">
            <Grid item container direction="column">
                <Typography variant="h6" align="center" color="text.secondary" paragraph>
                  {data.aboutParaOne}
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" paragraph>
                  {data.aboutParaTwo}
                </Typography>
                <a href="#Contact">
                    <Button className="button" variant="outlined">CONTACT ME</Button>
                </a>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}
