import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const MyReviewPage = () => {
  const location = useLocation();
  const { movieId, review } = location.state;
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: movieId }], getMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MyReviewPage;
