import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useNavigate } from "react-router-dom";

const ratings = [
  {
    value: 5,
    label: "5. Excellent",
  },
  {
    value: 4,
    label: "4. Good",
  },
  {
    value: 3,
    label: "3. Average",
  },
  {
    value: 2,
    label: "2. Poor",
  },
  {
    value: 0,
    label: "1. Terrible",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
    width: "25%",
    "& > * ": {
      width: "100%",
    },
  },
}));

const ReviewForm = ({ movie, review }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);
  const [rating, setRating] = useState(review.rating ?? 3);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/movies/myreviews/");
  };

  const onSubmit = (review) => {
    review.movieId = movie.id;
    review.rating = rating;
    context.addReview(review);
    setOpen(true);
  };

  const removeReview = () => {
    context.removeFromMyReviews(review.movieId);
    navigate("/movies/myreviews");
  };

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h2" variant="h3">
        Write a review
      </Typography>
      <Snackbar
        className={classes.snack}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <MuiAlert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h6">
            Thank you for submitting a review
          </Typography>
        </MuiAlert>
      </Snackbar>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="author"
          label="Author's name"
          name="author"
          autoFocus
          defaultValue={review.author}
          inputRef={register({ required: "Author name required" })}
        />
        {errors.author && (
          <MuiAlert severity="error">{errors.author.message}</MuiAlert>
        )}

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="content"
          label="Review text"
          id="content"
          multiline
          minRows={10}
          defaultValue={review.content}
          inputRef={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" },
          })}
        />
        {errors.content && (
          <MuiAlert severity="error">{errors.content.message}</MuiAlert>
        )}
        <TextField
          id="select-rating"
          select
          variant="outlined"
          label="Rating Select"
          value={rating}
          onChange={handleRatingChange}
          helperText="Don't forget your rating"
        >
          {ratings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {review.rating ? "Update" : "Submit"}
          </Button>
          {review.rating ? (
            <Button
              type="remove"
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={removeReview}
            >
              Remove
            </Button>
          ) : (
            <Button
              type="reset"
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                reset({
                  author: "",
                  content: "",
                });
              }}
            >
              Reset
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default ReviewForm;
