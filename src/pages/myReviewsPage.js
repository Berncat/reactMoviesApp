import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromMyReviews from "../components/cardIcons/removeFromMyReviews";
import MyReviewIcon from "../components/cardIcons/myReview";

const MyReviewsPage = () => {
  const { myReviews: reviews } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const myReviewsQueries = useQueries(
    reviews.map((review) => {
      return {
        queryKey: ["movie", { id: review.movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = myReviewsQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = myReviewsQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="My Reviews"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMyReviews movie={movie} />
            <MyReviewIcon movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MyReviewsPage;
