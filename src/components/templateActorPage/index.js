import React from "react";
import ActorHeader from "../headerActor";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  images: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
}));

const TemplateActorPage = ({ actor, children }) => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["Actor images", { id: actor.id }],
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles;

  return (
    <div className={classes.root}>
      <ActorHeader actor={actor} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.images}>
            <Carousel indicators={false} autoPlay={false}>
              {images.map((image) => (
                <img
                  key={image.file_path}
                  src={`https://image.tmdb.org/t/p/w400/${image.file_path}`}
                  alt={image.poster_path}
                />
              ))}
            </Carousel>
          </div>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateActorPage;
