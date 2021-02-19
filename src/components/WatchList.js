import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <div>
        {watchlist.map((movie) => (
          <h2>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
