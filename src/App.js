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
  SignupPage,
  VideoDetail,
  Playlist,
} from "./pages/index";
 import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/video/:videoId" element={<VideoDetail />} />
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
          path="/playlists/:playlistId"
          element={
            <RequiresAuth>
              <Playlist />
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
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
