import React from "react";
import s from "./Home.module.css";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Trending from "../Trending/Trending";

function Home() {
  return (
    <div className={s.container}>
      <div className={s.buttons}>buttons</div>
      <div className={s.principal}>
        <Trending />
      </div>
      <div className={s.search}>
        <Search />
      </div>
      <div className={s.results}>
        <Results />
      </div>
    </div>
  );
}

export default Home;
