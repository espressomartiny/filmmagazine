import React from "react";
import MovieList from "../MovieList";
import { Outlet } from "react-router-dom";

const Movies = () => {
  return (
    <div class="movies">
      <h1>Movies</h1>
      <div className="movies-container"></div>
        <MovieList/>
        <Outlet/>
    </div>
  );
};

export default Movies;
