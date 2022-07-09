import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { store } from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import {
  VideoProvider,
  PlaylistProvider,
  SinglePlaylistProvider,
} from "./context/index";
// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <PlaylistProvider>
          <SinglePlaylistProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </SinglePlaylistProvider>
        </PlaylistProvider>
      </VideoProvider>
    </Router>
  </StrictMode>
);
