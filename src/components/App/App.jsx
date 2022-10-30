import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useEffect } from "react";


import "./App.css";

import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/understanding";
import Support from "../Supported/Supported";
import Comment from "../Comment/Comment";
import ReviewFeedBack from "../ReviewFeedback/ReviewFeedback";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      <Route exact path="/">
        <Feeling />
      </Route>
      <Route exact path="/understanding">
        <Understanding />
      </Route>
      <Route exact path="/support">
        <Support />
      </Route>
      <Route exact path="/comment">
        <Comment />
      </Route>
      <Route exact path="/review">
        <ReviewFeedBack />
      </Route>
      </div>
    </Router>
  );
}

export default App;
