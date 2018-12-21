import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ModalDetails from "./ModalDetails";
import Grid from "@material-ui/core/Grid";
import "./Checkboxes.css";

const styles = theme => ({
  root: {
    display: "flex",
    background: "rgba(0, 0, 0, 0.12)",
    margin: "30px",
    border: "5px solid #005f82",

    borderRadius: "50px 20px",
    width: "65%",
    marginLeft: "17.5%"
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    width: "100%"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    marginTop: "35px",
    marginLeft: "20px"
  },
  question: {
    fontWeight: "bold",
    textAlign: "center"
  },
  banderight: {
    backgroundColor: "#EF914B"
  },
  bandeleft: {
    backgroundColor: "#005F82"
  }
});

class CheckBoxes extends Component {
  state = {
    value: "",
    image: "",
    description: ""
  };

  handleChange = event => {
    const answerSelect = this.props.answers.filter(
      answer => event.target.value === answer.content
    );
    console.log(this.props.answers);
    console.log(answerSelect);

    this.setState({
      image: answerSelect[0].type.imageUrl,
      description: answerSelect[0].type.explication,
      value: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} md={2} className={classes.bandeleft} />

        <Grid item xs={12} md={8}>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>
                <h2> {this.props.question}</h2>
              </FormLabel>

              <RadioGroup
                aria-label="Question"
                name="Question"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value={this.props.answers[0].content}
                  control={<Radio />}
                  label={<h3>{this.props.answers[0].content}</h3>}
                />
                <FormControlLabel
                  value={this.props.answers[1].content}
                  control={<Radio />}
                  label={<h3>{this.props.answers[1].content}</h3>}
                />
                <FormControlLabel
                  value={this.props.answers[2].content}
                  control={<Radio />}
                  label={<h3>{this.props.answers[2].content}</h3>}
                />
              </RadioGroup>

              <ModalDetails {...this.state} />
            </FormControl>
          </div>
        </Grid>
        <Grid items xs={12} md={2} className={classes.banderight} />
      </Grid>
    );
  }
}

CheckBoxes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckBoxes);
