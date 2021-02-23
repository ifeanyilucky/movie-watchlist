import React, { useState } from "react";
const Popular = () => {
  const [results, setResults] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const regularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const [loading, setLoading] = useState(true);

  fetch(regularApi)
    .then((res) => res.json())
    .then((data) => {
      setResults(data.results, { loading: false });
    });

  return (
    <div className="py-5 mx-auto text-center col-10">
      <h2 className="bubbleboy">Popular Movie</h2>
      <h3>{process.env.REACT_APP_API_KEY}</h3>
      <ul>
        {!loading ? (
          results.map((movie) => <li>{movie.title}</li>)
        ) : (
          <h2>Loading</h2>
        )}
      </ul>
    </div>
  );
};

export default Popular;
