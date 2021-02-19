import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import "./lib/fontawesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/watched" component={Watched} />
          <Route path="/add" component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
