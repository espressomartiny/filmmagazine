import React from "react";
import "./style.css";
import movies from "../../movie-database";
import { Link } from "react-router-dom";

const MovieList = () => {
    return (
  
        <nav className="movie-list">
          {movies.map((movie) => {
            return (
              <Link to={String(movie.id)} key={movie.id}>{movie.title}</Link>
            )
          })}
        </nav>
  
    )
  };

export default MovieList;
