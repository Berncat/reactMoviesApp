import React from "react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleMovie";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import MyReviewIcon from "../components/cardIcons/myReview";
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";

export default {
  title: "Cards/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const HomePage = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      action={(movie) => {
        return (
          <>
            <AddToFavouritesIcon movie={movie} />
            <AddToMustWatchIcon movie={movie} />
            <MyReviewIcon movie={movie} />
          </>
        );
      }}
      taging={(movie) => null}
    />
  );
};
HomePage.storyName = "Home Page";

export const NoImage = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
      action={(movie) => {
        return (
          <>
            <AddToFavouritesIcon movie={movie} />
            <AddToMustWatchIcon movie={movie} />
            <MyReviewIcon movie={movie} />
          </>
        );
      }}
      taging={(movie) => null}
    />
  );
};
NoImage.storyName = "No Image";

export const FavouritesPage = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavourites movie={movie} />
            <MyReviewIcon movie={movie} />
          </>
        );
      }}
      taging={(movie) => null}
    />
  );
};
FavouritesPage.storyName = "Favourites Page";

export const UpcomingPage = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      action={(movie) => {
        return (
          <>
            <AddToMustWatchIcon  movie={movie} />
          </>
        );
      }}
      taging={(movie) => null}
    />
  );
};
UpcomingPage.storyName = "Upcoming Page";

export const MustWatchPage = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustWatch movie={movie} />
          </>
        );
      }}
      taging={(movie) => null}
    />
  );
};
MustWatchPage.storyName = "MustWatch Page";
