import React, { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="container">
      <h3 className="bubbleboy">Watched</h3>
      {watched.length > 0 ? (
        <div>
          {watched.map((movie) => (
            <div>
              <MovieCard movie={movie} type="watched" />
            </div>
          ))}
        </div>
      ) : (
        <div className="col-10 mx-auto text-center mt-5">
          <h2>No Movies in your list</h2>
          <Link to="/watchlist">
            <button className="btn__primary mt-3">Add some</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Watched;
