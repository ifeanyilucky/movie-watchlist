import styled from "styled-components";
import LandingImg from "../asset/landing3.png";
import { Link } from "react-router-dom";
import Popular from "./Popular";
const HomeTwo = () => {
  return (
    <div className="container">
      <Home>
        <div className="row">
          <div className="col-md-5 mt-5">
            <div className="heroText">
              <h1 className="bubbleboy heroHead">
                add movies to your watchlist with ease
              </h1>
              <p className="text-muted mt-4">
                Search for movies and easily add them to your watchlist with no
                signup
              </p>
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
              <div className="is-flex is-justify-content py-6 "></div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="hero__img">
              <img src={LandingImg} alt="Watchlist Hero" className="w-100" />
            </div>
          </div>
        </div>
      </Home>
      <Popular />
    </div>
  );
};

const Home = styled.div`
  .heroText {
    margin-top: 3.6rem;
    h1 {
      color: var(--tertiary-color);
      font-size: 4rem;
    }
  }
  @media (max-width: 860px) {
    .heroHead {
    }
    h1 {
      font-size: 2.8rem !important;
    }
  }
  @media (max-width: 768px) {
    .heroText {
      text-align: center;
      margin-top: 0;

      .heroHead {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }

  .herobtn__wrapper {
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      align-items: center;
      display: block;
    }
    .heroBtn {
      background-color: var(--tertiary-color);
      padding: 14px 0;
      text-align: left;
      outline: none !important;
      border: none;
      /* border: 1px solid var(--primary-color); */
      border-radius: 30px;
      color: white;
      padding-left: 3px;
      padding-right: 13px;
      transition: all 0.6s;
      box-shadow: 5px 6px 10px rgb(64 136 141 / 45%);
      .icon__wrapper {
        background-color: white;
        padding: 11px 12px;
        border-radius: 50%;
        color: var(--tertiary-color);
      }
    }
  }
`;
export default HomeTwo;
