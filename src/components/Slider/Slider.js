import React from "react";
import s from "./Slider.module.css";
import GifCard from "../GifCard/GifCard";
import { useState, useEffect } from "react";

function Slider({ items }) {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(5);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const width = 200;
  const gap = 10;
  const translate = width * count + gap * count;

  // eslint-disable-next-line
  useEffect(() => {
    const handleResize = () => setViewWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (translate + 150 > viewWidth) {
      setCount((prev) => prev - 1);
    } else if (translate + width + gap + 150 < viewWidth && count < 5) {
      setCount((prev) => prev + 1);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    setPosition(() => 0);
  }, [count]);

  // items.length = 25
  // translate = 1050
  // 25/5 => 5
  const onClickNext = () => {
    if (-1 * (position - translate) < (items.length / count) * translate) {
      setPosition((prev) => prev - translate);
    }
  };

  const onClickPrev = () => {
    if (position + translate <= 0) {
      setPosition((prev) => prev + translate);
    }
  };

  return (
    <div className={s.container}>
      <button onClick={onClickPrev}>{"❮"}</button>
      <div
        className={s.containerList}
        style={{
          width: `${translate}px`,
          overflow: "hidden",
          padding: "10px 0px 10px 10px",
        }}
      >
        <div
          className={s.list}
          style={{
            transform: `translate3d(${position}px, 0px, 0px)`,
            transition: "0.3s ease-out",
            gap: `${gap}px`,
          }}
        >
          {items.length
            ? items.map((g) => (
                <GifCard
                  key={`${g.id}_${g.title}`}
                  title={g.title}
                  url={g.url}
                />
              ))
            : "No hay resultados"}
        </div>
      </div>

      <button onClick={onClickNext}>{"❯"}</button>
    </div>
  );
}

export default Slider;
