import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";

import {
  VideoProvider,
  ThemeProvider,
  AuthProvider,
  LikeProvider,
  WatchLaterProvider,
} from "./context/index";
// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <LikeProvider>
            <VideoProvider>
              <WatchLaterProvider>
                <App />
              </WatchLaterProvider>
            </VideoProvider>
          </LikeProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
