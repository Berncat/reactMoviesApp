import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  tagLine: {
    fontSize: "1.5rem",
  },
}));

const MovieHeader = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const movie = props.movie;

  return (
    <Paper component="div" className={classes.root} elevation={24}>
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      <Typography variant="h4" component="h3">
        <a href={movie.homepage}>{movie.title}</a>
        <br />
        <span className={classes.tagLine}>{`   "${movie.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
