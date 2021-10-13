export const mapGifs = (array) => {
  return array.map((gif) => ({
    id: gif.id,
    url: gif.images.original.url,
    title: gif.title,
  }));
};
