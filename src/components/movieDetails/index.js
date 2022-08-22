import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import FilmIcon from "@material-ui/icons/LocalMovies";
import ActorIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
  paper: {
    marginTop: 0,
    padding: 16,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 2,
    alignItems: "normal",
  },
  chip: {
    margin: 5,
  },
  fab: {
    position: "fixed",
    top: theme.spacing(11.5),
    right: theme.spacing(1.5),
  },
}));

const MovieDetails = ({ movie }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Paper className={classes.paper} elevation={24}>
        <Typography variant="h5">
          <Box sx={{ fontWeight: "bold" }}>Overview</Box>
        </Typography>
        <br></br>
        <Typography className={classes.root}>{movie.overview}</Typography>
        <br></br>
        <List>
          <ListItem className={classes.chips}>
            <Chip label="Genres" className={classes.chip} color="primary" />
            {movie.genres.map((g) => (
              <Chip
                key={g.name}
                label={g.name}
                className={classes.chip}
                color="primary"
                variant="outlined"
              />
            ))}
          </ListItem>
          <ListItem className={classes.chips}>
            <Chip
              icon={<AccessTimeIcon />}
              label={`${movie.runtime} min.`}
              color="primary"
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              icon={<MonetizationIcon />}
              label={`${movie.revenue.toLocaleString()}`}
              color="primary"
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              icon={<StarRate />}
              label={`${movie.vote_average} (${movie.vote_count})`}
              color="primary"
              variant="outlined"
              className={classes.chip}
            />
            <Chip
              label={`Released: ${movie.release_date}`}
              color="primary"
              variant="outlined"
              className={classes.chip}
            />
          </ListItem>
          <ListItem className={classes.chips}>
            <Link to={`/movies/${movie.id}`}>
              <Chip
                className={classes.chip}
                icon={<ActorIcon />}
                label="CAST"
                color="primary"
                clickable={true}
              />
            </Link>
            <Link to={`/movies/${movie.id}/similar`}>
              <Chip
                className={classes.chip}
                icon={<FilmIcon />}
                label="SIMILAR MOVIES"
                color="secondary"
                clickable={true}
              />
            </Link>
          </ListItem>
        </List>
      </Paper>
      <br></br>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;
