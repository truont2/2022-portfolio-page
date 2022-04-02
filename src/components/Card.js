import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../images/neighbors.jpg";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function MultiActionAreaCard({
  key,
  heading,
  paragraph,
  imgUrl,
  projectLink,
  tools,
  project,
}) {
  return (
    <Card
      sx={{ maxWidth: 360, minHeight: 400, margin: "0 auto" }}
      className="card"
      square
      elevation={4}
    >
      <CardMedia
        component="img"
        height="200"
        image={imgUrl}
        alt="project image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {paragraph}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tools}
        </Typography>
        <div className="projectButton">
        {project.url ? (
          <Button
            size="small"
            onClick={() => (window.location.href = `${projectLink}`)}
          >
            Live
          </Button>
        ) : null}
        {project.github ? (
          <Button
            size="small"
            onClick={() => (window.location.href = `${project.github}`)}
          >
            Github
          </Button>
        ) : null}
        </div>
      </CardContent>
    </Card>
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: "100%",
    //       height: 350,
    //     },
    //   }}
    // >
    //   <Paper elevation={3} />
    // </Box>
  );
}
