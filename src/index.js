import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Shopcontextprovider from "./Context/ShopContext";
import { FavoriteProvider } from "./Context/FavoritContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FavoriteProvider>
      <Shopcontextprovider>
        <App />
      </Shopcontextprovider>
    </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
