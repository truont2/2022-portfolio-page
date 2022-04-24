import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Fade from "react-reveal/Fade";
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
    <div id="Skills">
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
                    color="text"
                    paragraph
                    sx={{
                      textAlign: {
                        md: "left",
                        sm: "center"
                      }
                    }}
                  >
                    {data.skillOne}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text"
                    paragraph
                    sx={{
                      textAlign: {
                        md: "left",
                        sm: "center"
                      }
                    }}
                  >
                    {data.skillTwo}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text"
                    paragraph
                    sx={{
                      textAlign: {
                        md: "left",
                        sm: "center"
                      }
                    }}
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
