import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } = useContext(
    GlobalContext
  );

  return (
    <div>
      <div className="card_controls">
        {type === "watchlist" && (
          <>
            <button
              className="ctrl_btn"
              onClick={() => addMovieToWatched(movie)}
            >
              <i className="fa-fw far fa-eye"></i>
            </button>
            <button
              className="ctrl_btn"
              onClick={() => {
                removeMovieFromWatchlist(movie.id);
              }}
            >
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
