import React from "react";
import s from "./Slider.module.css";
import GifCard from "../GifCard/GifCard";
import { useState, useEffect } from "react";
import { WIDTH } from "../GifCard/GifCard";
import NotResult from "../NotResult/NotResult";

function Slider({ items }) {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(5);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const GAP = 10;
  const TRANSLATE = WIDTH * count + GAP * count;
  const END = -1 * (position - TRANSLATE) < (items.length / count) * TRANSLATE;

  // eslint-disable-next-line
  useEffect(() => {
    const handleResize = () => setViewWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (TRANSLATE + 150 > viewWidth) {
      setCount((prev) => prev - 1);
    } else if (TRANSLATE + WIDTH + GAP + 150 < viewWidth && count < 5) {
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
    if (END) {
      setPosition((prev) => prev - TRANSLATE);
    }
  };

  const onClickPrev = () => {
    if (position + TRANSLATE <= 0) {
      setPosition((prev) => prev + TRANSLATE);
    }
  };

  return (
    <div className={s.container}>
      <button
        style={{ visibility: `${position === 0 ? "hidden" : "visible"}` }}
        onClick={onClickPrev}
      >
        {"❮"}
      </button>
      <div
        className={s.containerList}
        style={{
          width: `${TRANSLATE}px`,
          overflow: "hidden",
          padding: "10px 0px 10px 10px",
        }}
      >
        <div
          className={s.list}
          style={{
            transform: `translate3d(${position}px, 0px, 0px)`,
            transition: "0.3s ease-out",
            gap: `${GAP}px`,
            height: "300px",
          }}
        >
          {items.length ? (
            items.map((g) => (
              <GifCard key={`${g.id}_${g.title}`} title={g.title} url={g.url} />
            ))
          ) : (
            <NotResult />
          )}
        </div>
      </div>

      <button
        style={{ visibility: `${!END ? "hidden" : "visible"}` }}
        onClick={onClickNext}
      >
        {"❯"}
      </button>
    </div>
  );
}

export default Slider;
