import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizEscapeGames } from "../API/questionQuiz";
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

const QuizEscapeGames = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <img
          src="http://www.saintex-reims.com/wp-content/themes/wpbootstrap/logo-stex-web.svg"
          style={{
            position: "absolute",
            height: "80px",
            left: "50px",
            top: "380px",
            backgroundColor: "#EF914B",
            borderRadius: "35px 13px"
          }}
        />
        <Grid item xs={12} md={2} className={classes.bandeleft} />
        <Grid item xs={12} md={8} className={classes.text}>
          <h2>Les Escape Games</h2>
        </Grid>
        <Grid item xs={12} md={2} className={classes.banderight} />
      </Grid>
      {questionQuizEscapeGames.map((question, index) => (
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
export default withStyles(styles)(QuizEscapeGames);
