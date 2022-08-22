import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Actor from "../actorCard";
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

const CastList = ({ cast }) => {
  let castCards = cast.map((c) => (
    <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={c.id} actor={c} />
    </Grid>
  ));

  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={24}>
      <Typography variant="h5">
        <Box sx={{ fontWeight: "bold" }}>Cast</Box>
      </Typography>
      <br></br>
      <Grid item container spacing={2}>
        {castCards}
      </Grid>
    </Paper>
  );
};

export default CastList;
