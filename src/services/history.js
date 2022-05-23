import axios from "axios";
import { toast } from "react-toastify";
const addVideoToHistory = async (video, auth, setHistory) => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/history",
      headers: { authorization: auth.token },
      data: { video },
    });
    setHistory(response.data.history);
  } catch (err) {
    console.log(err);
  }
};

  const clearAllHistory = (setHistory, auth) => {
    (async () => {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: auth.token },
      });
      setHistory(response.data.history);
      toast.warn("History cleared");
    })();
  };

    const removeFromHistory = (_id, auth, setHistory) => {
      (async () => {
        const response = await axios.delete(`/api/user/history/${_id}`, {
          headers: { authorization: auth.token },
        });
        setHistory(response.data.history);
        toast.warn("Removed from history");
      })();
    };
  export {clearAllHistory, addVideoToHistory, removeFromHistory}
