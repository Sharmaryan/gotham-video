import { useContext, createContext, useState } from "react";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playLists, setPlayLists] = useState([]);

  return (
    <PlaylistContext.Provider
      value={{ playLists, setPlayLists }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlayList = () => useContext(PlaylistContext);

export { usePlayList, PlaylistProvider };
