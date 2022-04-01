import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./work.css";
import Proj from "../Card";
import data from "../../data";
import Fade from "react-reveal/Fade";

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Work() {
  return (
    <container id="Projects">
      <div className="container work">
        {/* Hero unit */}
        <Typography variant="text" align="center" color="inherit" paragraph>
        My recent work
      </Typography>
      <Typography variant="h3" align="center" color="inherit" paragraph>
        Projects
      </Typography>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Fade left>
                <Proj
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  tools={project.tools}
                  project={project}
                />
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </container>
  );
}
