import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const WriteReviewIcon = ({ movie }) => {
  return (
    <IconButton>
      <Link
        to={"/reviews/form"}
        state={{
          movieId: movie.id,
        }}
      >
        <RateReviewIcon htmlColor="black" fontSize="large" />
      </Link>
    </IconButton>
  );
};

export default WriteReviewIcon;
