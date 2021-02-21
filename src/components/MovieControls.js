import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } = useContext(
    GlobalContext
  );

  return (
    <>
      <Controls className="card_controls">
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
      </Controls>
    </>
  );
};

const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-bottom: 1rem;
  .ctrl_btn {
    background-color: white;
    border: none;
    outline: none;
    padding: 5px 7px;
    border-radius: 15px;
    &:nth-child(1) {
      background-color: rgb(255, 255, 255);
      &:hover {
        opacity: 0.68;
      }
    }
    &:nth-child(2) {
      background-color: red;
      &:hover {
        opacity: 0.68;
      }
    }
  }
`;
