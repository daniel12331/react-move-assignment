import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpComingMoviePage from "./pages/upComingMoviePage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorsPage from "./pages/actorsPage";
import ActorsDetailPage from "./pages/actorsDetailPage"

import React from "react";

const App = () => {
  

  return (
    <QueryClientProvider client={queryClient}>
          <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcomingmovies" element={<UpComingMoviePage />} />
        <Route path="/movies/actors" element={<ActorsPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/actors/:id" element={<ActorsDetailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);