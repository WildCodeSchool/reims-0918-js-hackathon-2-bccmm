import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "./ModalDetails.css";

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
    padding: theme.spacing.unit * 4,
    border: "5px solid #005f82",
    outline: "5px solid #ef914b"
  },
  img: {
    height: "auto",
    width: "100%"
  },
  button: {
    backgroundColor: "#ef914b",
    color: "white",
    float: "right"
  },
  title: {
    fontSize: "46px",
    color: "#005f82"
  }
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
            <p>Valide ta réponse</p>
          </Button>
        ) : (
          <Button variant="contained" className={classes.button} disabled>
            <p>Valide ta réponse</p>
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
              <p className={classes.title}>
                <i class="material-icons blue600 md-36">check_circle</i>Bonne
                réponse
                <hr />
              </p>
            </Typography>

            <img
              className={classes.img}
              src={this.props.image}
              alt="pictureModal"
            />
            <Typography
              variant="h6"
              id="simple-modal-description"
              classname="h6"
            >
              <p>{this.props.description}</p>
            </Typography>
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
