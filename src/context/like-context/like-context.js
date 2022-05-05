import {useContext, createContext, useState} from 'react';

const LikeContext = createContext();

const LikeProvider = ({children}) => {
const [likedVideos, setLikedVideos] = useState([]);

    return (
      <LikeContext.Provider value={{ likedVideos , setLikedVideos}}>
        {children}
      </LikeContext.Provider>
    );
}

const useLike = () => useContext(LikeContext);

export {useLike, LikeProvider}