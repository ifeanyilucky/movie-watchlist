import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

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
          <div className="no__img text-center text-muted"> No Image!</div>
        )}
      </div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p className="text-muted">
          {movie.release_date ? movie.release_date.substring(0, 4) : <p>--</p>}
        </p>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
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
  .movie_info {
    justify-content: flex-start;
  }
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  align-content: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-right: 10px;
  .poster_img {
    border-radius: 10px;
    margin: auto;
  }
  btn:disabled {
    background-color: red;
  }
  .no__img {
    width: 75%;
    height: 160px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0 2rem;
    border-radius: 10px;
  }
  .controls {
    button {
      border-radius: 20px;
      background-color: var(--primary-color);
      outline: none;
      border: none;
      padding: 4px 8px;
      color: white;
      font-size: 0.7rem;
    }
    button:disabled {
      opacity: 0.56;
      cursor: not-allowed;
    }
  }
`;
