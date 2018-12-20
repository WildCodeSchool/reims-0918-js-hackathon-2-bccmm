import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "./Workshop.css";

const styles = {
  workshop: {
    backgroundColor: "#EF914B",
    minWidth: 275,
    padding: "20px",
    marginRight: "50px",
    marginLeft: "50px"
  },
  title: {
    fontSize: "1rem",
    color: "white"
  },
  pos: {
    marginBottom: 12
  },
  WWW: {
    display: "flex",
    flexWrap: "wrap",
    width: "100",
    backgroundColor: "#005F82",
    color: "white",
    minWidth: 275,
    padding: "20px",
    marginRight: "20px"
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    padding: "20px"
  }
};

const Workshop = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={8} className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Card className={classes.workshop}>
              <CardContent>
                <Typography className={classes.title}>
                  <h2>Vacancesdigitales</h2>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <h4>QUAND ?</h4>
            <Card className={classes.WWW}>
              <CardContent>
                <p>Pendant la période des vacances scolaires.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <h4>QUI ?</h4>
            <Card className={classes.WWW}>
              <CardContent>
                <p>Pour les enfants, à partir de 7 ans.</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <h4>QUOI ?</h4>
        <Card className={classes.WWW}>
          <CardContent>
            <p>
              Atelier créatifs et ludiques, autour des nouvelles technologies et
              nouveaux outils assistés par ordinateur.
            </p>
            <br />
            <p>A chaque fois un nouveau thème et des surprises !</p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Workshop);
