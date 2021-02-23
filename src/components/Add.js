import React, { useState } from "react";
import styled from "styled-components";
import { ResultCard } from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    const apiKey = process.env.REACT_APP_API_KEY;
    const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`;

    fetch(searchApi + `${e.target.value}`)
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
    <div className="container pt-5">
      <Search className="col-10 mx-auto mt-5">
        <form className="input__wrapper">
          <i className="far fa fa-search" style={{ color: "#b3c5cd" }} />
          <input
            type="text"
            placeholder="Search for movie..."
            value={query}
            onChange={onChange}
          />
        </form>
      </Search>
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
const Search = styled.div`
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 16px;
  }
  input::placeholder {
    color: #b3c5cd;
  }
  .input__wrapper {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    background-color: #eef3f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding-left: 16px;
  }
`;
export default Add;
