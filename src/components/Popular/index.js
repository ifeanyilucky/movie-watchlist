import React, { useState } from "react";
const Popular = () => {
  const [results, setResults] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const regularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  fetch(regularApi)
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        setResults(results);
      }
    });

  return (
    <div className="py-5 mx-auto text-center col-10">
      <h2 className="bubbleboy">Popular Movie</h2>
    </div>
  );
};

export default Popular;
