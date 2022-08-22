import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "../movieCardSmall";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  paper: {
    marginTop: 0,
    padding: 16,
  },
});

const MovieGridList = ({title, movies}) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m}/>
    </Grid>
  ));

  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={24}>
      <Typography variant="h5">
        <Box sx={{ fontWeight: "bold" }}>{title}</Box>
      </Typography>
      <br></br>
      <Grid item container spacing={2}>
        {movieCards}
      </Grid>
    </Paper>
  );
};

export default MovieGridList;
