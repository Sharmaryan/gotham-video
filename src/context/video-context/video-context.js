import { useContext, createContext, useReducer } from "react";
import { videoReducer } from "../../reducer/videos-reducer";
const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ categories, search }, videoDispatch] = useReducer(videoReducer, {
    categories: {
      all: null,
      spiderman: null,
      blackPanther: null,
      drStrange: null,
      hulk: null,
    },
    search: '',
  });

  return (
    <VideoContext.Provider value={{ videoDispatch, categories, search }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
