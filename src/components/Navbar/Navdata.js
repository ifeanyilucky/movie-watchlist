import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navdata = ({ isOpen }) => {
  return (
    <div className="container mt-4">
      <Ul isOpen={isOpen}>
        <li>
          <Link to="/" className="a text-muted">
            Home
          </Link>
        </li>
        <li>
          <Link to="/watchlist" className="a text-muted">
            Watchlist
          </Link>
        </li>
        <li>
          <Link to="/watched" className="a text-muted">
            Watched
          </Link>
        </li>
        <li style={{ marginLeft: "5rem" }}>
          <Link to="/add">
            <button className="btn__primary">Add</button>
          </Link>
        </li>
      </Ul>
    </div>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  vertical-align: middle;
  align-items: baseline;
  li {
    .a {
      text-decoration: none;
      margin-left: 1.4rem;

      transition: border-bottom 0.3s ease-in-out;
      padding-bottom: 8px;
      transition: 0.34s all;

      &:hover {
        color: var(--secondary-color) !important;
      }
    }
  }

  @media (max-width: 768px) {
    /* transform: ${({ isOpen }) =>
      isOpen ? "translateX(100%)" : "translateX(0)"}; */
    display: none;
    transition: all 0.3s linear;

    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 15px;
    text-align: left;
    margin: auto;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    overflow: hidden;
    /* background-color: black; */
    width: 100%;
    height: 100vh;
    z-index: 10;
    cursor: pointer;

    li {
      display: block;
      .a {
        text-decoration: none;
        font-size: 50px;
        text-transform: capitalize;
        color: var(--primary-color);
      }
    }
  }
`;

export default Navdata;
