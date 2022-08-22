import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingPage from "./pages/upcomingPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import MyReviewsPage from "./pages/myReviewsPage";
import MyReviewPage from "./pages/myReviewPage";
import ActorPage from "./pages/actorDetailsPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />}/>
            <Route path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
            <Route path="/movies/myreviews" element={<MyReviewsPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
            <Route path="/movies/myreview/" element={<MyReviewPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
