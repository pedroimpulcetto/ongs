import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./global.css";
import Routes from "./routes";
import store from "./store";

import MyAlert from "./components/Alert";
import Loading from "./components/Loading";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <MyAlert />
        <Loading />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
