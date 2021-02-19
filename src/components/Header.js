import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <div>
        <Navbar className="container">
          <div className="navbar__brand">
            <h1>
              <Link to="/">Mw</Link>
            </h1>
          </div>
          <ul className="navlist">
            <li>
              <Link to="/watchlist" className="navlink">
                Watchlist
              </Link>
            </li>
            <li>
              <Link to="/watched" className="navlink">
                Watched
              </Link>
            </li>
            <li>
              <Link to="/add" className="navlink">
                <button className="btn btn-primary">Add</button>
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </>
  );
};
const Navbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .navbar__brand {
    position: relative;
  }
  .navlist {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    list-style: none;
    margin-top: 10px;
    li {
      color: white;
      padding-left: 10px;
      .navlink {
        text-decoration: none;
        &:hover {
          color: red;
        }
      }
    }
  }
`;

export default Header;
