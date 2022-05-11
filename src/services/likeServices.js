import axios from "axios";

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
    } catch (err) {
      console.log(err);
    }
  }
};

const unLikeVideo = (_id, setIsLiked, setLikedVideos, auth) => {
  setIsLiked(false);
  (async () => {
    const response = await axios.delete(`/api/user/likes/${_id}`, {
      headers: { authorization: auth.token },
    });
    setLikedVideos(response.data.likes);
  })();
};

export { likeVideo, unLikeVideo };
