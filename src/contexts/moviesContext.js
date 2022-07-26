import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (review) => {
    let found = myReviews.findIndex(
      (reviewed) => reviewed.movieId === review.movieId
    );

    if (found > -1) {
      myReviews[found] = review;
    } else {
      let newMyReviews = [...myReviews, review];
      setMyReviews(newMyReviews);
    }
  };

  const removeFromMyReviews = (movieId) => {
    setMyReviews(myReviews.filter((review) => review.movieId !== movieId));
  };

  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
    }
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        myReviews,
        addReview,
        removeFromMyReviews,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
