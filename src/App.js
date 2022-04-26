import "./App.css";
import { Navbar } from "./components/index";
import { Routes, Route } from "react-router-dom";
import {Home, History, LikedVideos, Playlists, WatchLater,Explore} from './pages/index';
import { useTheme } from "./context/theme-context/theme-context";
function App() {
  const { theme } = useTheme();
  return (
    <div className="App" style={{ background: theme }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/liked-videos' element={<LikedVideos/>}/>
        <Route path='/playlists' element={<Playlists/>}/>
        <Route path='/watch-later' element={<WatchLater/>}/>
      </Routes>
    </div>
  );
}

export default App;
