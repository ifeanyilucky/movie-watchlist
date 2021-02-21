import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import "./lib/fontawesome/css/all.min.css";
import styled from "styled-components";
import { GlobalProvider } from "./context/GlobalState";
import Student from "./asset/students.jpg";
import Navbar from "./components/Navbar";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/watched" component={Watched} />
          <Route path="/add" component={Add} />
          <Route path="/details/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};
export default App;
const Home = () => {
  return (
    <>
      <HomeStyle>
        <div className="heroText">
          <div className="heroHead">
            <h1 className="bubbleboy col-sm-6 mx-auto col-xl-10">
              add movies to your watchlist with ease
            </h1>
            <div className="col-sm-4 mx-auto">
              <p>
                Search for movies and easily add them to your watchlist with no
                signup
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
          </div>
        </div>
      </HomeStyle>
    </>
  );
};

const HomeStyle = styled.div`
  @media (max-width: 860px) {
    .heroHead {
      margin-top: 5rem;
    }
    h1 {
      font-size: 2.6rem !important;
    }
  }
  .heroText {
    color: white;
    text-align: center;
    padding-top: 4rem;
    .heroHead {
      h1 {
        font-size: 4rem;
      }
    }

    .herobtn__wrapper {
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      @media (max-width) {
        align-items: center;
        display: block;
      }
      .heroBtn {
        background-color: var(--primary-color);
        padding: 10px 0;
        text-align: left;
        outline: none !important;
        border: none;
        /* border: 1px solid var(--primary-color); */
        border-radius: 30px;
        color: white;
        padding-left: 3px;
        padding-right: 13px;
        transition: all 0.6s;

        .icon__wrapper {
          background-color: white;
          padding: 9px 11px;
          border-radius: 50%;
          color: var(--primary-color);
          &:hover {
            color: var(--secondary-color);
          }
        }
        &:hover {
          background-color: var(--secondary-color);
        }
      }
    }
  }
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${Student});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
