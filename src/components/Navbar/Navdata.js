import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navdata = ({ isOpen }) => {
  return (
    <div className="container mt-4">
      <Ul isOpen={isOpen}>
        <li>
          <Link href="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link href="/watchlist" className="a">
            Watchlist
          </Link>
        </li>
        <li>
          <Link href="/watched" className="a">
            Watched
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

  li {
    .a {
      text-decoration: none;
      margin-left: 1.4rem;

      color: var(--primary-color);
      transition: border-bottom 0.3s ease-in-out;
      padding-bottom: 8px;
      transition: 0.34s all;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  @media (max-width: 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(100%)" : "translateX(0)"};
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
