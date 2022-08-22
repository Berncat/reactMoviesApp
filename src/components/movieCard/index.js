import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import Chip from "@material-ui/core/Chip";
import InfoIcon from "@material-ui/icons/Info";
import Divider from "@material-ui/core/Divider";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import QueueIcon from "@material-ui/icons/Queue";
import RateReviewIcon from "@material-ui/icons/RateReview";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 400 },
  avatar1: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  avatar2: {
    backgroundColor: "#3f51b5",
  },
  avatar3: {
    backgroundColor: "rgb(0, 0, 0)",
  },
  chip: {
    margin: 5,
  },
  chips: {
    display: "flex",
    justifyContent: "center",
    padding: 2,
    alignItems: "normal",
  },
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
  const { favourites, mustWatch, myReviews } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false;
  }

  if (myReviews.find((review) => review.movieId === movie.id)) {
    movie.reviewed = true;
  } else {
    movie.reviewed = false;
  }

  return (
    <Card className={classes.card} elevation={24}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="h6" gutterBottom>
            {movie.title}{" "}
          </Typography>
        }
        subheader={
          <AvatarGroup>
            {movie.favourite ? (
              <Avatar className={classes.avatar1}>
                <FavoriteIcon />
              </Avatar>
            ) : null}
            {movie.mustWatch ? (
              <Avatar className={classes.avatar2}>
                <QueueIcon />
              </Avatar>
            ) : null}
            {movie.reviewed ? (
              <Avatar className={classes.avatar3}>
                <RateReviewIcon />
              </Avatar>
            ) : null}
          </AvatarGroup>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent className={classes.chips}>
        <Chip
          className={classes.chip}
          icon={<CalendarIcon />}
          label={movie.release_date}
          color="primary"
          variant="outlined"
        />
        <Chip
          className={classes.chip}
          icon={<StarRateIcon />}
          label={movie.vote_average}
          color="primary"
          variant="outlined"
        />
      </CardContent>
      <CardContent className={classes.chips}>
        <Link to={`/movies/${movie.id}`}>
          <Chip
            className={classes.chip}
            icon={<InfoIcon />}
            label="MORE INFO ..."
            color="primary"
            clickable={true}
          />
        </Link>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.chips}>{action(movie)}</CardActions>
    </Card>
  );
}
