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
    <container className="slanted-div">
      <div className="container">
        {/* Hero unit */}
        <Typography
          variant="h2"
          align="center"
          color="text.secondary"
          paragraph
        >
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

{
  /* <Card
                  sx={{height: '100%', display: 'flex', flexDirection: 'column' }}
                  className="project"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card> */
}
