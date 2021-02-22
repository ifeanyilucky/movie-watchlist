import { Link } from "react-router-dom";
import styled from "styled-components";
const Navdata = ({ isOpen }) => {
  return (
    <Ul isOpen={!isOpen}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/watchlist">Watchlist</Link>
      </li>
      <li>
        <Link to="/watched">watched</Link>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-end;

  li {
    a {
      text-decoration: none;
      margin-left: 1.4rem;
      font-size: 15px;
      font-weight: 600;
      color: #808080;
      font-weight: 300;
      transition: border-bottom 0.3s ease-in-out;
      padding-bottom: 8px;
      transition: 0.34s all;
      text-transform: lowercase;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
        color: #282b25;
      }
    }
  }

  @media (max-width: 768px) {
    transition: all 0.3s linear;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(100%)" : "translateX(0)"};
    flex-flow: column nowrap;
    position: fixed;

    text-align: left;
    margin: 0;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    overflow: hidden;
    background-color: black;
    width: 100%;
    height: 100vh;
    background-attachment: cover;
    z-index: 10;

    li {
      display: block;
      a {
        text-decoration: none;
        font-size: 50px;
        text-transform: capitalize;
        color: white;
      }
    }
  }
`;

export default Navdata;
