import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import animation from '../../images/coding-freak.gif'
import './header.css';

const theme = createTheme();

export default function Header() {
  return (
    <ThemeProvider theme={theme} className="about">
      <CssBaseline />
      <div className="header">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box
              sx={{
                bgcolor: "none",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Album layout
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don&apos;t simply skip over it entirely.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained">Main call to action</Button>
                  <Button variant="outlined">Secondary action</Button>
                </Stack>
              </Container>
            </Box>
          </Grid>
          <Grid item>
              <img src={animation} alt="guy coding" className="headerImg"/>
          </Grid>
        </Grid>
        {/* Hero unit */}
      </div>
    </ThemeProvider>
  );
}
