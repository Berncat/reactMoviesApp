import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
  paper: {
    marginTop: 0,
    padding: 16,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

const MovieReview = ({ review }) => {
  const classes = useStyles();
  const context = useContext(MoviesContext);
  const navigate = useNavigate();

  const removeReview = () => {
    context.removeFromMyReviews(review.movieId);
    navigate("/movies/myreviews");
  };

  return (
    <>
      <Paper className={classes.paper} elevation={24}>
        <Typography variant="h5">
          <Box sx={{ fontWeight: "bold" }}>Review by: {review.author}</Box>
        </Typography>
        <br></br>
        <Typography className={classes.root}>{review.content}</Typography>
        {review.rating ? (
          <>
            <br></br>
            <Typography>
              <Box sx={{ fontWeight: "bold" }}>Rating: {review.rating}</Box>
            </Typography>
            <br></br>
            <Box>
              <Button
                type="update"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Link
                  className={classes.link}
                  to={`/reviews/form/`}
                  state={{
                    movieId: review.movieId,
                    review: review,
                  }}
                >
                  Update
                </Link>
              </Button>
              <Button
                type="remove"
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={removeReview}
              >
                Remove
              </Button>
            </Box>
          </>
        ) : null}
      </Paper>
    </>
  );
};
export default MovieReview;
