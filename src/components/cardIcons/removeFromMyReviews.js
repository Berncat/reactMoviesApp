import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import ReviewRemoveIcon from "@material-ui/icons/DeleteSweep";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromMyReviewsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromMyReviews = (e) => {
    e.preventDefault();
    context.removeFromMyReviews(movie.id);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromMyReviews}
    >
      <ReviewRemoveIcon htmlColor="black" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMyReviewsIcon;
