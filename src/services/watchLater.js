import axios from "axios";

const addToWatchLater = async (
  auth,
  navigate,
  setIsWatchLater,
  setWatchLaterVideos,
  singleVideoDetail
) => {
  if (!auth.user) {
    navigate("/login");
  } else {
    setIsWatchLater(true);
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/watchlater",
        headers: { authorization: auth.token },
        data: { video: singleVideoDetail },
      });
      setWatchLaterVideos(response.data.watchlater);
    } catch (err) {
      console.log(err);
    }
  }
};

const removeFromWatchLater = (
  _id,
  setIsWatchLater,
  setWatchLaterVideos,
  auth
) => {
  setIsWatchLater(false);
  (async () => {
    const response = await axios.delete(`/api/user/watchlater/${_id}`, {
      headers: { authorization: auth.token },
    });
    setWatchLaterVideos(response.data.watchlater);
  })();
};

export { removeFromWatchLater, addToWatchLater };
