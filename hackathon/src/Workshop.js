import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import "./Workshop.css";

const styles = {
  workshop: {
    backgroundColor: "#EF914B",
    minWidth: 275,
    padding: "20px",
    marginRight: "50px",
    marginLeft: "50px",
    borderRadius: "50px 20px",
    boxShadow: "10px 10px 10px orange",
    "&:hover": {
      boxShadow: "10px 10px 10px #055F81"
    }
  },
  title: {
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  },
  quand: {
    display: "flex",
    flexWrap: "wrap",
    width: "100",
    backgroundColor: "#005F82",
    color: "white",
    minWidth: 275,
    padding: "20px",
    marginRight: "20px",
    borderRadius: "50px 20px",
    boxShadow: "10px 10px 10px  #0077b3",
    "&:hover": {
      boxShadow: "10px 10px 10px #EE904C"
    }
  },
  quoi: {
    display: "flex",
    flexWrap: "wrap",
    width: "100",
    backgroundColor: "#005F82",
    color: "white",
    minWidth: 275,
    padding: "20px",
    marginRight: "20px",
    borderRadius: "50px 20px",
    boxShadow: "10px 10px 10px  #0077b3"
  },
  qui: {
    display: "flex",
    flexWrap: "wrap",
    width: "100",
    backgroundColor: "#005F82",
    color: "white",
    minWidth: 275,
    padding: "20px",
    marginRight: "20px",
    borderRadius: "50px 20px",
    boxShadow: "10px 10px 10px  #0077b3"
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
            <a href="http://www.saintex-reims.com/2018/11/vacancesdigitales-12/">
              <Card className={classes.workshop}>
                <CardContent>
                  <Typography className={classes.title}>
                    <h2>Vacancesdigitales</h2>
                    <p className="qqq">En savoir plus...</p>
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <h4>QUAND ?</h4>
            <Link to="/Calendar">
              <Card className={classes.quand}>
                <CardContent>
                  <p className="qqq">
                    Pendant la période des vacances scolaires.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <h4>QUI ?</h4>
            <Card className={classes.qui}>
              <CardContent>
                <p className="qqq">Pour les enfants, à partir de 7 ans.</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <h4>QUOI ?</h4>
        <Card className={classes.quoi}>
          <CardContent>
            <p className="qqq">
              Atelier créatifs et ludiques, autour des nouvelles technologies et
              nouveaux outils assistés par ordinateur.
            </p>
            <br />
            <p className="qqq">
              A chaque fois un nouveau thème et des surprises !
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Workshop);
