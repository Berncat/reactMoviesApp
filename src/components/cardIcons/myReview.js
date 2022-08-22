import React, { useContext } from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ViewReviewIcon from "@material-ui/icons/Message";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const MyReviewIcon = ({ movie }) => {
  const { myReviews } = useContext(MoviesContext);
  const review = myReviews.find((review) => review.movieId === movie.id);
  return (
    <IconButton>
      {review ? (
        <Link
          to={"/movies/myreview/"}
          state={{
            movieId: movie.id,
            review: review,
          }}
        >
          <ViewReviewIcon htmlColor="black" fontSize="large" />
        </Link>
      ) : (
        <Link
          to={"/reviews/form"}
          state={{
            movieId: movie.id,
            review: {},
          }}
        >
          <RateReviewIcon htmlColor="black" fontSize="large" />
        </Link>
      )}
    </IconButton>
  );
};

export default MyReviewIcon;
