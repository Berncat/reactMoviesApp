import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    fontSize: "1rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
}));

const MovieReview =  ({ review }) => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.root}><Box sx={{ fontWeight: "bold" }}>Review By: {review.author} </Box></p>
      <p className={classes.root}>{review.content} </p>
    </>
  );
};
export default MovieReview