import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ArrowIcon from "@material-ui/icons/DoubleArrowRounded";
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

export default function ActorCard({ actor }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleActor = () => {
    navigate(`/actors/${actor.id}`);
  };

  return (
    <Card className={classes.card} elevation={24}>
      <CardActions className={classes.header}>
        <Typography>
          <Box sx={{ fontSize: "0.8125rem", color: "white", margin: "4px" }}>
            {actor.character}
          </Box>
        </Typography>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/actor.jpg`
        }
      />
      <CardActions className={classes.chips}>
        <Chip
          className={classes.chip}
          onClick={handleActor}
          onDelete={handleActor}
          deleteIcon={<ArrowIcon />}
          label={actor.name}
        />
      </CardActions>
    </Card>
  );
}
