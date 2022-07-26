import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorList from "../components/actorList";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    error: movieError,
    isLoading: movieIsLoading,
    isError: movieIsError,
  } = useQuery(["movie", { id: id }], getMovie);

  const {
    data: credits,
    error: creditsError,
    isLoading: creditsIsLoading,
    isError: creditsIsError,
  } = useQuery(["credits", { id: id }], getCredits);

  if (movieIsLoading || creditsIsLoading) {
    return <Spinner />;
  }

  if (movieIsError) {
    return <h1>{movieError.message}</h1>;
  }

  if (creditsIsError) {
    return <h1>{creditsError.message}</h1>;
  }

  const cast = credits.cast;

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <ActorList cast={cast} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
