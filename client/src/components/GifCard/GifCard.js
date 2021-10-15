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
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={url} alt={title} style={{ width: `${WIDTH}px` }} />
      </a>
      <h3>
        {title.length > 1
          ? title.length > 30
            ? title.substring(0, 30) + "..."
            : title
          : "Gif"}
      </h3>
      <div
        onClick={onClick}
        className={s.btnFav}
        style={{ color: `${favourite ? "var(--fav-on)" : "var(--fav-off)"}` }}
      >
        {favourite ? "❤" : "♡"}
      </div>
    </div>
  );
}

export default GifCard;
