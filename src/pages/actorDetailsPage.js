import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActor, getActorCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieGridList from "../components/movieGridList";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const {
    data: actor,
    actorError,
    actorIsLoading,
    actorIsError,
  } = useQuery(["actor", { id: id }], getActor);

  const {
    data: credits,
    error: creditsError,
    isLoading: creditsIsLoading,
    isError: creditsIsError,
  } = useQuery(["actor credits", { id: id }], getActorCredits);

  if (actorIsLoading || creditsIsLoading) {
    return <Spinner />;
  }

  if (actorIsError) {
    return <h1>{actorError.message}</h1>;
  }

  if (creditsIsError) {
    return <h1>{creditsError.message}</h1>;
  }

  const actorMovies = credits.cast;

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
            <MovieGridList title="Movie Roles" movies={actorMovies} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
