import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route path={`${process.env.PUBLIC_URL}/app`} component={App} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
