import styled from "styled-components";
import React from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav>
      <div className="HeroLogo">
        <Link to="/" className="a">
          <h1>Msearch</h1>
        </Link>
      </div>

      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #000;
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
      color: white;
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
