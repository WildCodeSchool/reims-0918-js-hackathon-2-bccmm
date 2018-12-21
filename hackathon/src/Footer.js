import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  text: {
    textAlign: "center",
    backgroundColor: "#EF914B",
    color: "white"
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12} md={2} />
      <Grid item xs={12} md={8} className={classes.text}>
        <p>
          Centre culturel numérique Saint-Exupéry - Chaussée Bocquaine Esplanade
          André Malraux
        </p>
        <p>51100 Reims</p>
      </Grid>
      <Grid items xs={12} md={2} />
    </Grid>
  );
};

export default withStyles(styles)(Footer);
