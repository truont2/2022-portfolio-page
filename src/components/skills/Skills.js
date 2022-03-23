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
      <div className="work container">
        <h1> Skills </h1>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <StyledTooltip title="I am navy">
                <Button variant="contained" color="primary">
                  Styled tooltip
                </Button>
              </StyledTooltip>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
