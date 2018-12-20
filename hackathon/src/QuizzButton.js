import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Workshop from "./Workshop";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    textAlign: "center"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`,
    textTransform: "none"
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

const images = [
  {
    url: "https://www.numerama.com/content/uploads/2016/10/3d-impression.jpg",
    title: "Impression 3D",
    width: "50%",
    route: "/QuizImp3D"
  },
  {
    url:
      "https://www.abf-escaliers.fr/wp-content/uploads/2017/10/decoupe-laser-slide-1600x1000-1024x640.jpg",
    title: "Découpe laser",
    width: "50%",
    route: "/QuizLaser"
  },
  {
    url:
      "http://objectif-photographe.fr/wp-content/uploads/2013/11/lightpainting01.jpg",
    title: "Light painting",
    width: "50%",
    route: "/QuizLightpainting"
  },
  {
    url:
      "https://france3-regions.francetvinfo.fr/bourgogne-franche-comte/sites/regions_france3/files/styles/top_big/public/assets/images/2018/04/25/live-escape-game-1155620_1920-3626707.jpg?itok=pT2h3Pta",
    title: "Escape game",
    width: "50%",
    route: "/QuizEscapeGame"
  }
];

const QuizzButton = props => {
  const { classes } = props;
  return (
    <div>
      <Workshop />
      <div className={classes.root}>
        {images.map(image => (
          <Grid item xs={12} sm={6} key={image.title}>
            <Link to={`${image.route}`}>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                  margin: 50
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="title"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </Link>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(QuizzButton);
