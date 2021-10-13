import React from "react";
import s from "./GifCard.module.css";

function GifCard({ title, url }) {
  return (
    <div className={s.container}>
      <img src={url} alt={title} />
      <h3>{title.length > 1 ? title : "Not name"}</h3>
    </div>
  );
}

export default GifCard;
