import React from "react";
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import s from "./Results.module.css";

function Results() {
  const results = useSelector((state) => state.results);
  const searchState = useSelector((state) => state.searchState);

  return (
    <div className={s.container}>
      <h2>Results</h2>
      {searchState ? <Slider items={results} /> : null}
    </div>
  );
}

export default Results;
