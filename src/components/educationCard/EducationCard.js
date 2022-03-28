import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ education, schoolName, subHeader, duration }) {
  return (
    <Card sx={{ minWidth: 275 }} className="educationCard">
      <CardContent>
        <Typography sx={{ fontSize: 20, color: "#11cdef" }}>{schoolName}</Typography>
        <Typography component="div">{subHeader}</Typography>
        <Typography sx={{ mb: 1.5 }} color="inherit">
          {duration}
        </Typography>
        <p className="description mt-3">{education.desc}</p>
        <ul>
          {education.descBullets
            ? education.descBullets.map((desc) => {
                return <li key={desc}>{desc}</li>;
              })
            : null}
        </ul>
      </CardContent>
    </Card>
  );
}
