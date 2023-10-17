import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { AlbumsProvider } from "./context/AlbumsProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlbumsProvider>
      <App />
    </AlbumsProvider>
  </React.StrictMode>
);
