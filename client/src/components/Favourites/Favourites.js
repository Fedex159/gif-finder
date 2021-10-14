import React from "react";
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import s from "./Favourites.module.css";

function Favourites() {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className={s.container}>
      <h2>Favourites</h2>
      <Slider items={favourites} fav={true} />
    </div>
  );
}

export default Favourites;
