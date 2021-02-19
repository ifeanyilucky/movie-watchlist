import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="col-6 mx-auto mb-4">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="poster_img w-50"
        />
      ) : (
        <div> No Image!</div>
      )}
      <MovieControls type={type} movie={movie} />
    </div>
  );
};
