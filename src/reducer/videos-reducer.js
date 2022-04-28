export const videoReducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        categories: {
          ...state.categories,
          all: true,
          blackPanther: false,
          drStrange: false,
          hulk: false,
          spiderman: false,
        },
      };
    case "SPIDER-MAN":
      return {
        ...state,
        categories: {
          ...state.categories,
          all: false,
          blackPanther: false,
          drStrange: false,
          hulk: false,
          spiderman: true,
        },
      };
    case "DR-STRANGE":
      return {
        ...state,
        categories: {
          ...state.categories,
          all: false,
          blackPanther: false,
          drStrange: true,
          hulk: false,
          spiderman: false,
        },
      };
    case "HULK":
      return {
        ...state,
        categories: {
          ...state.categories,
          all: false,
          blackPanther: false,
          drStrange: false,
          hulk: true,
          spiderman: false,
        },
      };
    case "BLACK-PANTHER":
      return {
        ...state,
        categories: {
          ...state.categories,
          all: false,
          blackPanther: true,
          drStrange: false,
          hulk: false,
          spiderman: false,
        },
      };
    default:
      return { ...state };
  }
};
