import React from "react";
import movies from "../../movie-database";
import { useParams } from "react-router-dom";


const Movie = () => {
  const {id} = useParams();
  const data = movies.find((movie) => movie.id === Number(id)); 
  return (
    <div className="movie">
        <img src={data.poster} />
        <h2>{data.title}</h2>
        <p>{data.storyline}</p>
    </div>
  );
};

export default Movie;
