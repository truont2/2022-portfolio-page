import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Fade from "react-reveal/Fade";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./skills.css";
import data from "../../data";
import { Icon } from "@iconify/react";
import Lott from "../Lottie/Lottie.js";
import skillAnimation from "../Lottie/skills.json";

export default function Skills() {
  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-tooltip {
      background: navy;
    }
  `;
  return (
    <div>
      <CssBaseline />
      <div className="container">
        <Typography
          variant="h2"
          align="center"
          color="text.secondary"
          paragraph
        >
          Skills
        </Typography>
        <Fade right>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {data.skills.map((skill, index) => (
              // <Grid item xs={2} sm={4} md={1} key={index}>
              <StyledTooltip title={skill.para}>
                <Icon
                  icon={skill.fontAwesomeClassname}
                  data-inline="false"
                  className="icon skill-icon"
                ></Icon>
              </StyledTooltip>
              // </Grid>
            ))}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="About"
          >
            <Grid item xs={12} sm={4} md={4} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className="About">
                  <Lott animationData={skillAnimation} size={500} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </div>
    </div>
  );
}
