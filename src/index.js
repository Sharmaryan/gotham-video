import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";

import {
  VideoProvider,
  AuthProvider,
  LikeProvider,
  WatchLaterProvider,
  HistoryProvider,
  PlaylistProvider,
  SinglePlaylistProvider
} from "./context/index";
// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <LikeProvider>
          <VideoProvider>
            <WatchLaterProvider>
              <HistoryProvider>
                <PlaylistProvider>
                <SinglePlaylistProvider>

                  <App />
                </SinglePlaylistProvider>
                </PlaylistProvider>
              </HistoryProvider>
            </WatchLaterProvider>
          </VideoProvider>
        </LikeProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
