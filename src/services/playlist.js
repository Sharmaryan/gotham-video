import axios from "axios";
const addAndDeleteFromPlaylist = (e, _id, singleVideoDetail, auth) => {
  if (e.target.checked) {
    (async () => {
      try {
        await axios.post(
          `/api/user/playlists/${_id}`,
          { video: singleVideoDetail },
          {
            headers: { authorization: auth.token },
          }
        );
      } catch (err) {
        console.log(err);
      }
    })();
  } else {
    (async () => {
      try {
        await axios.delete(`/api/user/playlists/${_id}`, {
          headers: { authorization: auth.token },
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }
};

const createPlaylist = async (auth, playListTitle, setPlayLists, navigate) => {
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
      } catch (err) {
        console.log(err);
      }
    }
  }
};

const removeFromPlaylist = (_id, auth, setSinglePlayList, playlistId) => {
  (async () => {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${_id}`,
      {
        headers: { authorization: auth.token },
      }
    );

    setSinglePlayList(response.data.playlist.videos);
  })();
};

export { addAndDeleteFromPlaylist, createPlaylist, removeFromPlaylist };
