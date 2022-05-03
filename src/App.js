import "./App.css";
import { Navbar, RequiresAuth } from "./components/index";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  History,
  LikedVideos,
  Playlists,
  WatchLater,
  Explore,
  LoginPage,
  SignupPage
} from "./pages/index";
import { SidebarLayout } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<SidebarLayout />}>
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
          <Route
            path="/liked-videos"
            element={
              <RequiresAuth>
                <LikedVideos />
              </RequiresAuth>
            }
          />
          <Route
            path="/playlists"
            element={
              <RequiresAuth>
                <Playlists />
              </RequiresAuth>
            }
          />
          <Route
            path="/watch-later"
            element={
              <RequiresAuth>
                <WatchLater />
              </RequiresAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
