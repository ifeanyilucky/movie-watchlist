import React, { useState } from "react";
import styled from "styled-components";
import tvIllustration from "../asset/tv.png";
import { Link } from "react-router-dom";

const Home = () => {
  const key = "7ef167d99d70738bc660fac277664bb9";
  const [results, setResults] = useState([]);
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1
  `)
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });
  return (
    <div className="container">
      <Hero>
        <h1>
          <span
            style={{ color: "var(--primary-color)" }}
            className="text-underline-warning"
          >
            Add Movies
          </span>
          <br />
          <span style={{ color: "var(--secondary-color)" }}>
            to your watchlist with Ease
          </span>
        </h1>
        <div className="mx-auto col-4 text-center mt-3">
          <p className="text-muted">
            Search for movies and easily add them to your watchlist, and also
            your watched-list
          </p>
        </div>
        <div className="herobtn__wrapper">
          <Link to="/add">
            <button className="heroBtn">
              <span className="icon__wrapper">
                <i className="fas fa-video"></i>
              </span>{" "}
              <span style={{ padding: "8px 35px" }}>Get started </span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </Link>
        </div>
        <div className="heroImg">
          <img src={tvIllustration} className="w-75" alt="Tv Illustration" />
        </div>
      </Hero>
      <PopularMovie>
        <div className="row">
          {results.map((result) => (
            <h2>{result.title}</h2>
          ))}
          <div className="col-sm-3"></div>
        </div>
      </PopularMovie>
    </div>
  );
};

export default Home;
const PopularMovie = styled.div`
  text-align: center;
`;
const Hero = styled.div`
  .heroImg {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    text-align: center;
  }
  h1 {
    text-align: center;
    margin-top: 3rem;
    font-size: 4rem;
  }
  .herobtn__wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    .heroBtn {
      background-color: var(--primary-color);
      padding: 10px 0;
      text-align: left;
      outline: none;
      border: 1px solid var(--primary-color);
      border-radius: 30px;
      color: white;
      padding-left: 3px;
      padding-right: 13px;
      transition: all 0.6s;
      .icon__wrapper {
        background-color: white;
        padding: 9px 10px;
        border-radius: 50%;
        color: var(--primary-color);
      }
      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }
`;
