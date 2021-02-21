import React, { useState } from "react";
import styled from "styled-components";
import tvIllustration from "../asset/tv.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Student from "../asset/students.jpg";
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
};
