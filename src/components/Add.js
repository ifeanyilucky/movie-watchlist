import React, { useState } from "react";
import styled from "styled-components";
import { ResultCard } from "./ResultCard";
const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    //API KEY
    const tmdbApiKey = "7ef167d99d70738bc660fac277664bb9";

    //TMDB SEARCH API URL
    const uri = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&language=en-US&page=1&include_adult=false&query=${e.target.value}`;

    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="container">
      <div className="col-9 mx-auto mt-5">
        <form>
          <Search
            type="text"
            placeholder="Search for movie..."
            value={query}
            onChange={onChange}
          />
        </form>
      </div>
      <div style={{ marginTop: "2rem" }}>
        {results.length > 0 && (
          <div>
            <p className="text-center text-muted mb-4">
              Number of movies found: {results.length}
            </p>
            <ul>
              {results.map((movie) => (
                <li key={movie.id} style={{ listStyle: "none" }}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
const Search = styled.input`
  background-color: #f9f9f9;
  width: 100%;
  padding: 15px 20px;
  border-radius: 30px;
  outline: none !important;
  border: 2px solid black;
`;
export default Add;
