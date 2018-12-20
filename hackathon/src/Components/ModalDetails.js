import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  img: {
    height: "auto",
    width: "100%"
  },
  button: {
    backgroundColor: "#ef914b",
    color:'white',  }
});

class ModalDetails extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.value ? (
          <Button
            variant="contained"
            onClick={this.handleOpen}
            className={classes.button}
          >
            Valide ta réponse
          </Button>
        ) : (
          <Button variant="contained" className={classes.button} disabled>
            Valide ta réponse
          </Button>
        )}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.props.description}
            </Typography>
            <img className={classes.img} src={this.props.image} />
          </div>
        </Modal>
      </div>
    );
  }
}

ModalDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModalDetails);
