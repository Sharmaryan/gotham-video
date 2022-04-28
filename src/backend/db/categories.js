import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image: "https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg",
    altText: "spiderman",
    title: "Spiderman",
    dispatch: "SPIDER-MAN",
  },
  {
    _id: uuid(),
    image:
      "https://static.toiimg.com/thumb/msid-82379825,width-1200,height-900,resizemode-4/.jpg",
    altText: "black panther",
    title: "black panther",
    dispatch: "BLACK-PANTHER",
  },
  {
    _id: uuid(),
    image:
      "https://www.cnet.com/a/img/resize/41e73c5ac49a7b175534bcd57d6b46c4776472dc/2016/10/28/3809e66e-d3fe-46bb-963a-705d88f5a902/doctor-strange6.jpg?auto=webp",
    altText: "dr strange",
    title: "dr strange",
    dispatch: "DR-STRANGE",
  },
  {
    _id: uuid(),
    image: "https://i.cdn.newsbytesapp.com/images/l80120220322094701.png",
    altText: "hulk",
    title: "hulk",
    dispatch: "HULK",
  },
];
