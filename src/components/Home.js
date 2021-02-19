import styled from "styled-components";
import tvIllustration from "../asset/tv.png";

const Home = () => {
  return (
    <div className="container">
      <Hero>
        <h1>
          <span
            style={{ color: "var(--primary-color)" }}
            className="text-underline-warning"
          >
            Add Movies
          </span>{" "}
          <br />
          <span style={{ color: "var(--secondary-color)" }}>
            to your watchlist with Ease
          </span>
        </h1>
        <div className="mx-auto col-4 text-center">
          <p className="text-muted">
            Search for movies and easily add them to your watchlist, and also
            your watched-list
          </p>
        </div>
        <div className="herobtn__wrapper">
          <button className="heroBtn">Get started</button>
        </div>
        <div className="heroImg">
          <img src={tvIllustration} className="w-75" alt="Tv Illustration" />
        </div>
      </Hero>
    </div>
  );
};

export default Home;
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
    .heroBtn {
      background-color: var(--primary-color);
    }
  }
`;
