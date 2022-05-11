import axios from "axios";
const hanldlePlaylistTitleInput = (e, _id, singleVideoDetail,auth) => {
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
        const response = await axios.delete(`/api/user/playlists/${_id}`, {
          headers: { authorization: auth.token },
        });
        console.log(response);
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

export {hanldlePlaylistTitleInput, createPlaylist, removeFromPlaylist}