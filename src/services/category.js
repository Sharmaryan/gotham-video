const category = (videos, categories) => {
  const { spiderman, drStrange, blackPanther, hulk, all } = categories;

  if (spiderman) {
    const spidermanVideos = videos.filter(
      (video) => video.category === "spiderman"
    );
    return spidermanVideos;
  }
  if (drStrange) {
    const drStrangeVideos = videos.filter(
      (video) => video.category === "drStrange"
    );
    return drStrangeVideos;
  }
  if (blackPanther) {
    const blackPantherVideos = videos.filter(
      (video) => video.category === "blackPanther"
    );
    return blackPantherVideos;
  }
  if (hulk) {
    const hulkVideos = videos.filter((video) => video.category === "hulk");
    return hulkVideos;
  }
  if (all) {
    return videos;
  }
  return videos;
};

  const searchVideo = (currentCategory, search) =>
    currentCategory.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    export { searchVideo, category}
