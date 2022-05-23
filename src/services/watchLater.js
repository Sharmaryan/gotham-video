import axios from "axios";
import { toast } from "react-toastify";
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
      toast.success("Added to watch later");
    } catch (err) {
      toast.error("Something went wrong");
    }
  }
};

const removeFromWatchLater = async (
  _id,
  setIsWatchLater,
  setWatchLaterVideos,
  auth
) => {
  setIsWatchLater(false);
  const response = await axios.delete(`/api/user/watchlater/${_id}`, {
    headers: { authorization: auth.token },
  });
  setWatchLaterVideos(response.data.watchlater);
  toast.warn("Removed from watch later");
};

  const removeWatchLater = (_id, auth, setWatchLaterVideos) => {
    (async () => {
      const response = await axios.delete(`/api/user/watchlater/${_id}`, {
        headers: { authorization: auth.token },
      });
      setWatchLaterVideos(response.data.watchlater);
      toast.warn("Removed from watch later");
    })();
  };

export { removeFromWatchLater, removeWatchLater, addToWatchLater };
