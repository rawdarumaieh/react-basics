import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import CardList from "./CardList";
// import Card from "./Card";
import App from "./containers/App";
// import { robots } from "./robots";
ReactDOM.render(
  <App />,

  document.getElementById("root")
);

serviceWorker.unregister();
