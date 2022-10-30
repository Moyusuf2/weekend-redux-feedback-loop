import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";

import "./App.css";

import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/understanding";
import Support from "../Supported/Supported";
import Comment from "../Comment/Comment";
import ReviewFeedBack from "../ReviewFeedback/ReviewFeedback";

function App() {

  const  allFeedbacks = ({reviewFeedback}) =>{
    console.log('in allFeedbacks')

    axios({
      method: 'POST',
      url: '/feedback',
      data: reviewFeedback

    })
    .then((res) => {
      console.log('feedback sent to server', res)
    })
    .catch((error) => {
      console.log('error sending feedback', error)
    })



  }

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <Feeling />
        </div>
      </Route>
      <Route exact path="/understanding">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Understanding />
      </Route>
      <Route exact path="/support">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Support />
      </Route>
      <Route exact path="/comment">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Comment />
      </Route>
      <Route exact path="/review">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <ReviewFeedBack  allFeedbacks={allFeedbacks}/>
      </Route>
    </Router>
  );
}

export default App;
