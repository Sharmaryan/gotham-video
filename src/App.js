import "./App.css";
import { Navbar } from "./components/index";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  History,
  LikedVideos,
  Playlists,
  WatchLater,
  Explore,
} from "./pages/index";
import { SidebarLayout } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<SidebarLayout />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/history" element={<History />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/watch-later" element={<WatchLater />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
