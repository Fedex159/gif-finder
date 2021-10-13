import React from "react";
import s from "./GifCard.module.css";
export const WIDTH = 200;

function GifCard({ title, url }) {
  return (
    <div className={s.container} style={{ width: `${WIDTH}px` }}>
      <img src={url} alt={title} style={{ width: `${WIDTH}px` }} />
      <h3>{title.length > 1 ? title : "Gif"}</h3>
    </div>
  );
}

export default GifCard;
