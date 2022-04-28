import { useContext, createContext, useReducer } from "react";
import { videoReducer } from "../../reducer/videos-reducer";
const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ categories }, videoDispatch] = useReducer(videoReducer, {
    categories: {
      all: null,
      spiderman: null,
      blackPanther: null,
      drStrange: null,
      hulk: null,
    },
  });

  return (
    <VideoContext.Provider value={{ videoDispatch, categories }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
