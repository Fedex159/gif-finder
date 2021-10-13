import React from "react";
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import s from "./Results.module.css";

function Results() {
  const results = useSelector((state) => state.results);

  return (
    <div className={s.container}>
      <Slider items={results} />
    </div>
  );
}

export default Results;
