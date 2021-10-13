import React from "react";
import { useSelector } from "react-redux";
import GifCard from "../GifCard/GifCard";
import s from "./Results.module.css";
import { useState } from "react";

function Results() {
  const results = useSelector((state) => state.results);
  const [position, setPosition] = useState(0);

  const onClickNext = () => {
    if (848 * 6 + (position - 848) >= 0) {
      setPosition((prev) => prev - 848);
    }
  };
  const onClickPrev = () => {
    if (position + 848 <= 0) {
      setPosition((prev) => prev + 848);
    }
  };
  return (
    <div className={s.container}>
      <button onClick={onClickPrev}>{"<"}</button>
      <div className={s.slider}>
        <div
          style={{
            transform: `translate3d(${position}px, 0px, 0px)`,
            transition: "0.3s ease-out",
          }}
          className={`${s.results}`}
        >
          {results.length
            ? results.map((g) => (
                <GifCard
                  key={`${g.id}_${g.title}`}
                  title={g.title}
                  url={g.url}
                />
              ))
            : "No hay resultados"}
        </div>
      </div>

      <button onClick={onClickNext}>{">"}</button>
    </div>
  );
}

export default Results;
