import React, { Component } from "react";
import Calendar from "react-calendar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Calendars.css";

const styles = {
  banderight: {
    backgroundColor: "#EF914B"
  },
  bandeleft: {
    backgroundColor: "#005F82"
  },
  buttonback: {
    backgroundColor: "#EF914B",
    color: "white",
    marginLeft: "15px",
    marginTop: "5px"
  }
};

class Calendars extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  fevrier() {
    this.setState({ date: new Date("2019-02-01") });
  }

  avril() {
    this.setState({ date: new Date("2019-04-01") });
  }

  juillet() {
    this.setState({ date: new Date("2019-07-01") });
  }

  render() {
    const { classes } = this.props;
    return (
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
          <div className="calendar">
            <Calendar activeStartDate={this.state.date} />
            <div className="caption">
              <div className="vignettes">
                <p>Février 2019</p>
                <button onClick={() => this.fevrier()} className="atelier1" />
                <br />
                <button onClick={() => this.fevrier()} className="atelier2" />
                <p>Avril 2019</p>
                <button onClick={() => this.avril()} className="atelier3" />
                <br />
                <button onClick={() => this.avril()} className="atelier4" />
                <p>Juillet 2019</p>
                <button onClick={() => this.juillet()} className="atelier5" />
              </div>
              <div className="mois">
                <div>
                  <div>
                    <p>
                      11 au 15 Février 2019: CREATION JEU VIDEO / CABANES POUR
                      OISEAUX FRILEUX
                    </p>
                  </div>
                  <div>
                    <p>
                      18 au 22 Février 2019: THEATRE & MEDIA / JEUX DE POCHES EN
                      BOIS / LIGHT PAINTING
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>8 au 12 Avril 2019: ESCAPE GAME</p>
                  </div>
                  <div>
                    <p>
                      15 au 19 Avril 2019: CIRCUIT DE BILLES GÉANTS /
                      CONSTRUCTION DE JEUX
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      8 au 12 Juillet 2019: FIGURINE 3D / SELFIE ET NUMÉRIQUE:
                      REDÉCOUVRIR LA PHOTOGRAPHIE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
              <Button variant="contained" className={classes.buttonback}>
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid items xs={12} md={2} className={classes.banderight} />
      </Grid>
    );
  }
}

export default withStyles(styles)(Calendars);
