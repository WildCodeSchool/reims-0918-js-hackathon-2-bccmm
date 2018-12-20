import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./Checkboxes.css"

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class CheckBoxes extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{this.props.question}</FormLabel>
          <RadioGroup
            aria-label="Questions"
            name="question1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.props.answers.map((answer, index) => (
              <FormControlLabel
                className="font"
                value={answer.content}
                control={<Radio />}
                label={answer.content}
                key={index}
              />
            ))}
          </RadioGroup>
          {this.state.value.length !== 0 ? (
            <Button variant="contained" color="secondary">
              Valide ta réponse
            </Button>
          ) : (
            <Button variant="contained" color="secondary" disabled>
              Valide ta réponse
            </Button>
          )}
        </FormControl>
      </div>
    );
  }
}

CheckBoxes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckBoxes);
