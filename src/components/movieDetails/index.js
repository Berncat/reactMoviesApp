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

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    justifyContent: "center",
    padding: 2,
    alignItems: "normal",
  },
  chip: {
    margin: 5,
  },
  paper: {
    marginTop: 30,
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
      <Typography variant="h5">
        <Box sx={{ fontWeight: "bold" }}>Overview</Box>
      </Typography>
      <Typography variant="h6">{movie.overview}</Typography>
      <Paper className={classes.paper} elevation={24}>
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
              label={`${movie.vote_average} (${movie.vote_count}`}
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
        </List>
      </Paper>

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
