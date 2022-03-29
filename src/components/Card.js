import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../images/neighbors.jpg";

export default function MultiActionAreaCard({
  key,
  heading,
  paragraph,
  imgUrl,
  projectLink,
  tools,
  project
}) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea onClick={() => (window.location.href = `${projectLink}`)}>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="green iguana"
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => (window.location.href = `${projectLink}`)}>Live</Button>
        {project.github ? 
        <Button size="small" onClick={() => (window.location.href = `${project.github}`)}>Github</Button> :
      null
      }
      </CardActions>
    </Card>
  );
}
