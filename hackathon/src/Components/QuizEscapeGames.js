import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizEscapeGames } from "../API/questionQuiz";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  buttonback: {
    margin: theme.spacing.unit,
    backgroundColor: "#EF914B",
    color: "white"
  },
  buttoncalendar: {
    margin: theme.spacing.unit,
    backgroundColor: "#005F82",
    color: "white"
  }
});

const QuizEscapeGames = props => {
  const { classes } = props;
  return (
    <div>
      <h2>Les Escape Games</h2>
      {questionQuizEscapeGames.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
      <Grid container>
        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={3}>
          <Link to="/">
            <Button variant="contained" className={classes.buttonback}>
              Retour à l'accueil
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} />
        <Grid item xs={12} md={1}>
          <Link to="/calendar">
            <Button variant="contained" className={classes.buttoncalendar}>
              Calendrier
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(styles)(QuizEscapeGames);
