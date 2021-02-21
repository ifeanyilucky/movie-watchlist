import React from "react";

const MovieDetail = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h2>Movie Details {movie}</h2>
    </div>
  );
};

export default MovieDetail;
