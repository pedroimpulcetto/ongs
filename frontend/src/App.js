import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./global.css";
import Routes from "./routes";
import store from "./store";

import MyAlert from "./components/Alert";
import Loading from "./components/Loading";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
        <MyAlert />
        <Loading />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
