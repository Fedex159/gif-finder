import React from "react";
import s from "./NavBar.module.css";

function NavBar({ setShowFav, showFav }) {
  const onClickFav = () => {
    setShowFav(() => true);
  };

  const onClickTrend = () => {
    setShowFav(() => false);
  };
  return (
    <div className={s.container}>
      <div
        onClick={onClickTrend}
        style={
          !showFav ? { fontWeight: "bold", textDecoration: "underline" } : null
        }
      >
        Trending
      </div>
      <div
        onClick={onClickFav}
        style={
          showFav ? { fontWeight: "bold", textDecoration: "underline" } : null
        }
      >
        Favourites
      </div>
    </div>
  );
}

export default NavBar;
