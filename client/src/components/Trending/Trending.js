import React from "react";
import Slider from "../Slider/Slider";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTrending } from "../../actions";
import s from "./Trending.module.css";

function Trending() {
  const trending = useSelector((state) => state.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(await getTrending());
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending</h2>
      <Slider items={trending} />
    </div>
  );
}

export default Trending;
