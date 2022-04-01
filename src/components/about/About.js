import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
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
      <Typography variant="h2" align="center" color="text.secondary" paragraph>
        About
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

          <Grid item xs={12} sm={4} md={4} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className="About">
                <Typography variant="h6" align="center" color="black" paragraph>
                  {data.aboutParaOne}
                </Typography>
                <Typography variant="h6" align="center" color="black" paragraph>
                  {data.aboutParaTwo}
                </Typography>
                <Typography variant="h6" align="center" color="black" paragraph>
                  {data.aboutParaThree}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}
