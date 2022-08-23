import React from "react";
import MovieList from "../components/movieList";
import SampleMovie from "./sampleMovie";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import MyReviewIcon from "../components/cardIcons/myReview";

export default {
  title: "Lists/MovieList",
  component: MovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const movies = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieList
        movies={movies}
        action={(movie) => {
          return (
            <>
              <AddToFavouritesIcon movie={movie} />
              <AddToMustWatchIcon movie={movie} />
              <MyReviewIcon movie={movie} />
            </>
          );
        }}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
