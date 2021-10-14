import React from "react";
import s from "./GifCard.module.css";
import { addFavourite, removeFavourite } from "../../actions";
import { useDispatch } from "react-redux";

export const WIDTH = 200;

function GifCard({ title, url, favourite, id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    const gif = {
      id,
      url,
      title,
      favourite: true,
    };
    if (!favourite) {
      dispatch(addFavourite(gif));
    } else {
      dispatch(removeFavourite(gif));
    }
  };

  return (
    <div className={s.container} style={{ width: `${WIDTH}px` }}>
      <img src={url} alt={title} style={{ width: `${WIDTH}px` }} />
      <h3>{title.length > 1 ? title : "Gif"}</h3>
      <button
        onClick={onClick}
        className={s.btnFav}
        style={{ color: `${favourite ? "pink" : "black"}` }}
      >
        {favourite ? "❤" : "♡"}
      </button>
    </div>
  );
}

export default GifCard;
