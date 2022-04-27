import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context/theme-context";
import { VideoProvider } from "./context/video-context/video-context";
// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
