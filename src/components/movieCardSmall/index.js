import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
  header: {
    backgroundColor: "#3f51b5",
    justifyContent: "center",
  },
  media: { height: 300 },
  chips: {
    display: "flex",
    justifyContent: "center",
    padding: 2,
    alignItems: "normal",
  },
  chip: {
    margin: 5,
    color: "#3f51b5",
    backgroundColor: "transparent",
  },
});

export default function MovieCardSmall({ movie }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleActor = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Card className={classes.card} elevation={24}>
      <CardActions className={classes.header}>
        <Typography>
          <Box sx={{ fontSize: "0.8125rem", color: "white", margin: "4px" }}>
            {movie.title}
          </Box>
        </Typography>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardActions className={classes.chips}>
        <Chip
          className={classes.chip}
          onClick={handleActor}
          onDelete={handleActor}
          deleteIcon={<InfoIcon />}
          label="More Info"
        />
      </CardActions>
    </Card>
  );
}
