require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

function mapGifs(array) {
  return array.map((gif) => ({
    id: gif.id,
    url: gif.images.original.webp,
    title: gif.title,
  }));
}

async function getGifs(name) {
  try {
    let response;
    if (name) {
      response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`
      );
    } else {
      response = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`
      );
    }
    return mapGifs(response.data.data);
  } catch (e) {
    console.log("Error getGifs", e);
    return [];
  }
}

const gifs = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      res.json(await getGifs(name));
    } else {
      res.json(await getGifs(null));
    }
  } catch (e) {
    res.sendStatus(404);
  }
};

module.exports = gifs;
