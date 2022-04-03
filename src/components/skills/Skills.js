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
import { Container, IconButton } from "@mui/material";
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
    <div id="Experiences">
      <CssBaseline />
      <div className="container">
        <Typography
          variant="h3"
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
            className="skillStack"
          >
            {data.skills.map((skill, index) => (
              <StyledTooltip title={skill.para}>
                <Icon
                  icon={skill.fontAwesomeClassname}
                  data-inline="false"
                  className="icon skill-icon"
                ></Icon>
              </StyledTooltip>
            ))}
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={4} container>
              <Grid item container direction="column">
                  <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    {data.skillOne}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    {data.skillTwo}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    {data.skillThree}
                  </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Lott animationData={skillAnimation} size={500} />
            </Grid>
          </Grid>
        </Fade>
      </div>
    </div>
  );
}
