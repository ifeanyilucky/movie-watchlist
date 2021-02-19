import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
  return (
    <Resultcard>
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="poster_img w-75"
          />
        ) : (
          <div> No Image!</div>
        )}
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p className="text-muted">
          {movie.release_date ? movie.release_date.substring(0, 4) : <p>--</p>}
        </p>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
            className="btn btn-primary"
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to watchlist
          </button>
        </div>
      </div>
    </Resultcard>
  );
};

const Resultcard = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 20px;
  .poster_img {
    border-radius: 10px;
  }
`;
