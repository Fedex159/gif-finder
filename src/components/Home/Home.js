import React from "react";
import s from "./Home.module.css";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Trending from "../Trending/Trending";
import Favourites from "../Favourites/Favourites";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";

function Home() {
  const [showFav, setShowFav] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.buttons}>
        <NavBar setShowFav={setShowFav} showFav={showFav} />
      </div>
      <div className={s.principal}>
        {showFav ? <Favourites /> : <Trending />}
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
