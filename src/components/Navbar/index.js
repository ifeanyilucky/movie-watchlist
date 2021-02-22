import styled from "styled-components";
import React from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav>
      <div className="HeroLogo">
        <Link to="/" className="a">
          <h1>Mlist</h1>
        </Link>
      </div>

      <Burger />
      <button className="btn__primary text-center ml-5">
        <Link to="/add" className="a">
          add <i className="far fa fa-plus-circle" />
        </Link>
      </button>
    </Nav>
  );
};

const Nav = styled.nav`
  button {
    .a {
      text-decoration: none;
      color: white;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  background-color: transparent;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 1rem;
  z-index: 1;
  align-items: baseline;

  .HeroLogo {
    h1 {
      color: var(--primary-color);
      font-family: bubbleboy;
    }
    .a {
      color: white;
      text-decoration: none !important;
      font-family: Bubbleboy;
    }
  }
`;

export default Navbar;
