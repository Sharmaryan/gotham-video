import { useContext, createContext, useState } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  return (
    <WatchLaterContext.Provider
      value={{ watchLaterVideos, setWatchLaterVideos }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
