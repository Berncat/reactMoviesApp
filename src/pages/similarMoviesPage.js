import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getSimilarMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieGridList from "../components/movieGridList";

const SimilarMoviesPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    error: movieError,
    isLoading: movieIsLoading,
    isError: movieIsError,
  } = useQuery(["movie", { id: id }], getMovie) ;

  const {
    data: similar,
    error: similarError,
    isLoading: similarIsLoading,
    isError: similarIsError,
  } = useQuery(["similar", { id: id }], getSimilarMovies) ;

  if (movieIsLoading || similarIsLoading) {
    return <Spinner />;
  }

  if (movieIsError) {
    return <h1>{movieError.message}</h1>;
  }

  if (similarIsError) {
    return <h1>{similarError.message}</h1>;
  }

  const similarMovies = similar.results;

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <MovieGridList title="Similar Movies" movies={similarMovies} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default SimilarMoviesPage;
