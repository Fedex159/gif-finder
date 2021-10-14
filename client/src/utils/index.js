export const changeFavouriteState = (array, gif) => {
  return array.map((g) => {
    if (g.id === gif.id) {
      return {
        ...g,
        favourite: !g.favourite,
      };
    } else {
      return g;
    }
  });
};
