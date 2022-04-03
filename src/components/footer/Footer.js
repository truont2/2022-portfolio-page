import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
import "./footer.css";
import Fade from "react-reveal/Fade";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      className="footer"
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
        <Fade bottom cascade>
          <Typography
            variant="h3"
            align="center"
            color="inherit"
            paragraph
          >
            
              Reach out to me!

          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="inherit"
            paragraph
          >
            Let's create your next experience together
          </Typography>
          </Fade>
          <Stack
            sx={{ p: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            color="blue"
          >
            <IconButton
              size="large"
              aria-label="Github"
              color="inherit"
              className="footer-icon"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="Github"
              color="inherit"
              className="footer-icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/takaratruong/")
              }
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            <a className="footerLink" href="mailto:truont2@gmail.com">truont2@gmail.com</a>
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="inherit"
            paragraph
          >
            <span>
              Made With <icon>❤</icon> by{" "}
              <a className="footerLink" href="https://www.chetanverma.com/">Takara Truong</a>
            </span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
