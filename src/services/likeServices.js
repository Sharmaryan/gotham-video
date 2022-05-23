import axios from "axios";
import { toast } from "react-toastify";
const likeVideo = async (
  auth,
  navigate,
  setIsLiked,
  singleVideoDetail,
  setLikedVideos
) => {
  if (!auth.user) {
    navigate("/login");
  } else {
    try {
      setIsLiked(true);
      const response = await axios({
        method: "post",
        url: "/api/user/likes",
        headers: { authorization: auth.token },
        data: { video: singleVideoDetail },
      });
      setLikedVideos(response.data.likes);
      toast.success("Added to liked videos");
    } catch (err) {
      toast.error("Something went wrong");
    }
  }
};

const unLikeVideo = async (_id, setIsLiked, setLikedVideos, auth) => {
  setIsLiked(false);
  const response = await axios.delete(`/api/user/likes/${_id}`, {
    headers: { authorization: auth.token },
  });
  setLikedVideos(response.data.likes);
  toast.warn("Removed from liked videos");
};

 const removeLikedVideo = (_id, auth, setLikedVideos) => {
   (async () => {
     const response = await axios.delete(`/api/user/likes/${_id}`, {
       headers: { authorization: auth.token },
     });
     setLikedVideos(response.data.likes);
     toast.warn("Removed from liked videos");
   })();
 };

export { likeVideo, unLikeVideo, removeLikedVideo };
