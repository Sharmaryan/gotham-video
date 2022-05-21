import axios from "axios";
export const addToVideoHistory = async (video, auth, setHistory) => {
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
