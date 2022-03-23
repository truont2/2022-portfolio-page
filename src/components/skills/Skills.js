import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

const theme = createTheme();
export default function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h1> Skills </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <h2> hello </h2>
            </Grid>
          ))}
        </Grid>
      </main>
    </ThemeProvider>
  );
}
