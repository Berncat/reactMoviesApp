import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
