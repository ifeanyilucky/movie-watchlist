import React from "react";
import { MovieControls } from "./MovieControls";
import styled from "styled-components";
export const MovieCard = ({ movie, type }) => {
  return (
    <Moviecard className="mb-5">
      {movie.poster_path ? (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="poster_img w-100"
            />
          </div>
        </>
      ) : (
        <div className="no__img"> No Image!</div>
      )}
      <div className="controls">
        <MovieControls type={type} movie={movie} />
      </div>
    </Moviecard>
  );
};

const Moviecard = styled.div`
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    background: black;
    overflow: hidden;
    .poster_img {
      object-fit: cover;
      opacity: 0.6;
    }
  }

  .no__img {
    width: 75%;
    height: 160px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0 2rem;
    border-radius: 10px;
  }
`;
