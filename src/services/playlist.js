import axios from "axios";

const addAndDeleteFromPlaylist = async (
  e,
  _id,
  singleVideoDetail,
  auth,
  toast,
  setPlayLists,
  playLists
) => {
  if (e.target.checked) {
    try {
      const response = await axios.post(
        `/api/user/playlists/${_id}`,
        { video: singleVideoDetail },
        {
          headers: { authorization: auth.token },
        }
      );
      setPlayLists([...playLists].map((item) =>  (item._id === response.data.playlist._id ) ? response.data.playlist : item));
      toast.success("Added to playlist");
    } catch (err) {
      toast.error("Something went wrong");
    }
  } else {
    try {
  const response =   await axios.delete(
        `/api/user/playlists/${_id}/${singleVideoDetail._id}`,
        {
          headers: { authorization: auth.token },
        }
      );
      setPlayLists(
        [...playLists].map((item) =>
          item._id === response.data.playlist._id
            ? response.data.playlist
            : item
        )
      );
      toast.warn("Removed from playlist");
    } catch (err) {
      toast.error("Something went wrong");
    }
  }
};

const createPlaylist = async (
  auth,
  playListTitle,
  setPlayLists,
  navigate,
  toast
) => {
  if (!auth.user) {
    navigate("/login");
  } else {
    if (playListTitle.length !== 0) {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/playlists",
          headers: { authorization: auth.token },
          data: { playlist: { title: playListTitle } },
        });
        setPlayLists(response.data.playlists);
        toast.success("Playlist created");
      } catch (err) {
        toast.error("Something went wrong");
      }
    }
  }
};

const removeFromPlaylist = async (
  _id,
  auth,
  setSinglePlayList,
  playlistId,
  toast
) => {
  const response = await axios.delete(
    `/api/user/playlists/${playlistId}/${_id}`,
    {
      headers: { authorization: auth.token },
    }
  );
  toast.warn("Removed from playlist");
  setSinglePlayList(response.data.playlist.videos);
};

export { addAndDeleteFromPlaylist, createPlaylist, removeFromPlaylist };
