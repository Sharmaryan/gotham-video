import { useContext, createContext, useState } from "react";
const SinglePlaylistContext = createContext();

const SinglePlaylistProvider = ({ children }) => {
  const [singlePlayList, setSinglePlayList] = useState([]);

  return (
    <SinglePlaylistContext.Provider value={{ singlePlayList, setSinglePlayList }}>
      {children}
    </SinglePlaylistContext.Provider>
  );
};

const useSinglePlayList = () => useContext(SinglePlaylistContext);

export { useSinglePlayList, SinglePlaylistProvider };
