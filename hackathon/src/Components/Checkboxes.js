import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ModalDetails from "./ModalDetails";

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
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{this.props.question}</FormLabel>
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
              label={this.props.answers[0].content}
            />
            <FormControlLabel
              value={this.props.answers[1].content}
              control={<Radio />}
              label={this.props.answers[1].content}
            />
            <FormControlLabel
              value={this.props.answers[2].content}
              control={<Radio />}
              label={this.props.answers[2].content}
            />
          </RadioGroup>

          <ModalDetails {...this.state} />
        </FormControl>
      </div>
    );
  }
}

CheckBoxes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckBoxes);
