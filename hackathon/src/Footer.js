import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import "./Footer.css";

const styles = {
  text: {
    textAlign: "center",
    backgroundColor: "white",
    color: "black"
  },
  banderight: {
    backgroundColor: "#EF914B"
  },
  bandeleft: {
    backgroundColor: "#005F82"
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12} md={2} className={classes.bandeleft} />
      <Grid item xs={12} md={8} className={classes.text}>
        <p>
          Centre culturel numérique Saint-Exupéry - Chaussée Bocquaine Esplanade
          André Malraux
        </p>
        <p>51100 Reims</p>
      </Grid>
      <Grid items xs={12} md={2} className={classes.banderight} />
    </Grid>
  );
};

export default withStyles(styles)(Footer);
