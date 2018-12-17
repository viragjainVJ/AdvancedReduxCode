import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "../src/prod/testing/src/Root";

import "./styles.css";

import App from "../src/prod/testing/src/components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  rootElement
);
