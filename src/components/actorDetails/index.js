import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import CakeIcon from "@material-ui/icons/Cake";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
  paper: {
    marginTop: 0,
    padding: 16,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 2,
    alignItems: "normal",
  },
  chip: {
    margin: 5,
  },
  fab: {
    position: "fixed",
    top: theme.spacing(11.5),
    right: theme.spacing(1.5),
  },
}));

const ActorDetails = ({ actor }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={24}>
        <Typography variant="h5">
          <Box sx={{ fontWeight: "bold" }}>Biography</Box>
        </Typography>
        <br></br>
        <Typography className={classes.root}>
          {actor.biography ? `${actor.biography}` : "Sorry, No details"}
        </Typography>
        <br></br>
        <List>
          <ListItem className={classes.chips}>
            {actor.birthday ? (
              <Chip
                icon={<CakeIcon />}
                label={`${actor.birthday}`}
                color="primary"
                variant="outlined"
                className={classes.chip}
              />
            ) : null}
            {actor.place_of_birth ? (
              <Chip
                icon={<HomeIcon />}
                label={`${actor.place_of_birth}`}
                color="primary"
                variant="outlined"
                className={classes.chip}
              />
            ) : null}
            {actor.imdb_id ? (
              <a href={`https://www.imdb.com/name/${actor.imdb_id}`}>
                <Chip
                  className={classes.chip}
                  icon={<MovieIcon />}
                  label="IMDb"
                  color="primary"
                  clickable={true}
                />
              </a>
            ) : null}
          </ListItem>
        </List>
      </Paper>
      <br></br>
    </>
  );
};
export default ActorDetails;
