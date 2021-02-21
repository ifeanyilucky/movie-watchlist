import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="container mt-5">
      <h3 className="bubbleboy">Watchlist</h3>
      {watchlist.length > 0 ? (
        <div>
          {watchlist.map((movie) => (
            <div>
              <MovieCard movie={movie} type="watchlist" />
            </div>
          ))}
        </div>
      ) : (
        <div className="col-10 mx-auto text-center mt-5">
          <h2>No Movies in your list</h2>
          <Link to="/add">
            <button className="btn__primary mt-3">Add some</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WatchList;
