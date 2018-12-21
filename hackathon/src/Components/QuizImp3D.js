import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizImp3D } from "../API/questionQuiz";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  buttonback: {
    backgroundColor: "#EF914B",
    color: "white",
    marginLeft: "15px"
  },
  buttoncalendar: {
    backgroundColor: "#005F82",
    color: "white",
    marginLeft: "50px"
  },
  banderight: {
    backgroundColor: "#EF914B"
  },
  bandeleft: {
    backgroundColor: "#005F82"
  },
  text: {
    textAlign: "center"
  }
});

const QuizImp3D = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={2} className={classes.bandeleft} />
        <Grid item xs={12} md={8} className={classes.text}>
          <h2>L'imprimante 3D</h2>
        </Grid>
        <Grid item xs={12} md={2} className={classes.banderight} />
      </Grid>
      {questionQuizImp3D.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
      <Grid container>
        <Grid item xs={12} md={2} className={classes.bandeleft} />
        <Grid item xs={12} md={2}>
          <Link to="/">
            <Button variant="contained" className={classes.buttonback}>
              Retour à l'accueil
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={4} />
        <Grid item xs={12} md={2}>
          <Link to="/calendar">
            <Button variant="contained" className={classes.buttoncalendar}>
              Calendrier
            </Button>
          </Link>
        </Grid>
        <Grid items xs={12} md={2} className={classes.banderight} />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(QuizImp3D);
