import React from "react";
import s from "./NotResult.module.css";

function NotResult({ fav }) {
  return <div className={`${s.container} ${fav ? s.fav : s.default}`}></div>;
}

export default NotResult;
