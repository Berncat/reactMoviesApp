import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import FilterIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    paddingTop: theme.spacing(7),
  },
  grid: {
    display: "flex",
    justifyContent: "space-around",
  },
  fab: {
    position: "fixed",
    top: theme.spacing(11.5),
    right: theme.spacing(1.5),
  },
}));

function MovieListPageTemplate({ movies, title, action }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [minRatingFilter, setMinRatingFilter] = useState("0");
  const [maxRatingFilter, setMaxRatingFilter] = useState("10");
  const [movieSorting, setMovieSorting] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);
  const minRating = minRatingFilter;
  const maxRating = maxRatingFilter;
  const sorting = Number(movieSorting);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return (
        Number(m.vote_average) > minRating && Number(m.vote_average) < maxRating
      );
    })
    .sort((a, b) => {
      if (sorting === 0) {
        return new Date(b.release_date) - new Date(a.release_date);
      } else if (sorting === 1) {
        return new Date(a.release_date) - new Date(b.release_date);
      } else if (sorting === 2) {
        return b.vote_average - a.vote_average;
      } else if (sorting === 3) {
        return a.vote_average - b.vote_average;
      } else {
        return new Date(b.release_date) - new Date(a.release_date);
      }
    });

  const handleChange = (type, value) => {
    if (type === "title") {
      setTitleFilter(value);
    } else if (type === "minRating") {
      setMinRatingFilter(value);
    } else if (type === "maxRating") {
      setMaxRatingFilter(value);
    } else if (type === "sorting") {
      setMovieSorting(value);
    } else {
      setGenreFilter(value);
    }
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container className={classes.grid} spacing={5}>
          <MovieList action={action} movies={displayedMovies} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <FilterIcon />
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          minRatingFilter={minRatingFilter}
          maxRatingFilter={maxRatingFilter}
          movieSorting={movieSorting}
        />
      </Drawer>
    </>
  );
}
export default MovieListPageTemplate;
