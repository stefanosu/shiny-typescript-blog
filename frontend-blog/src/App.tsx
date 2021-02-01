import React from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import DisplayAllPosts from "./components/DisplayAllPosts";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/allPosts" component={DisplayAllPosts} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
