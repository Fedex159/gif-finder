export const mapGifs = (array) => {
  return array.map((gif) => ({
    id: gif.id,
    url: gif.images.original.url,
    title: gif.title,
  }));
};

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
