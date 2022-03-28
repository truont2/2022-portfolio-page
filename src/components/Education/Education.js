import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import data from "../../data";
import EducationCard from "../educationCard/EducationCard";
import "./education.css";
import Fade from "react-reveal/Fade";
import Container from '@mui/material/Container'

export default function ComplexGrid() {
  return (
    <div className="container education work">
      <CssBaseline />
      <Typography variant="h2" align="center" color="text.secondary" paragraph>
        Education
      </Typography>

      <Fade left>
      <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}           direction="row"
          justifyContent="center"
          alignItems="center">
            {data.education.map((school, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <EducationCard
                key={index}
                education={school}
                schoolName={school.schoolName}
                subHeader={school.subHeader}
                duration={school.duration}
                className="educationCard"
              />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
