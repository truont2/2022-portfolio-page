import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./about.css";
import CssBaseline from "@mui/material/CssBaseline";
import data from "../../data";
import Fade from "react-reveal/Fade";

export default function ComplexGrid() {
  return (
    <div id="About">
      <div className="container">
        <CssBaseline />
        <Typography
          variant="h3"
          align="center"
          color="text.secondary"
          paragraph
        >
          About Me
        </Typography>
        <Fade left>
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
                <Typography
                  variant="h6"
                  color="text.secondary"
                  paragraph
                  sx={{
                    textAlign: {
                      md: "left",
                      sm: "center"
                    }
                  }}
                >
                  {data.aboutParaOne}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  paragraph
                  sx={{
                    textAlign: {
                      md: "left",
                      sm: "center"
                    }
                  }}
                >
                  {data.aboutParaTwo}
                </Typography>
                <a href="#Contact">
                  <Button className="button" variant="outlined">
                    Let's Talk
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </div>
    </div>
  );
}
