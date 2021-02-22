import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import "./lib/fontawesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

import Navbar from "./components/Navbar";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import HomeTwo from "./components/Home2";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Navbar />
        </div>

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={HomeTwo} />
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
