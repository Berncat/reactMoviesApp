import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const UpcomingPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={AddToMustWatchIcon}
    />
  );
};
export default UpcomingPage;