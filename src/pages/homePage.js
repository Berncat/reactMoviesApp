import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // These three lines are redundant; we will replace them later.
  const favourites = movies.filter((m) => m.favouurite);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  const addToFavourites = (movieId) => true;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};

export default HomePage;
