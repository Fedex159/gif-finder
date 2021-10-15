import React from "react";
import s from "./Home.module.css";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Trending from "../Trending/Trending";
import Favourites from "../Favourites/Favourites";
import NavBar from "../NavBar/NavBar";
import Colors from "../Colors/Colors";
import colors from "../../utils/variables";
import StartScreen from "../StartScreen/StartScreen";
import { useState } from "react";

function Home() {
  const [showFav, setShowFav] = useState(false);
  const [color, setColor] = useState("black");
  const [showStart, setShowStart] = useState(true);

  return (
    <div className={s.container} style={colors[color]}>
      <div
        className={s.startScreen}
        style={showStart ? { zIndex: "2" } : { zIndex: "-1" }}
      >
        {showStart ? <StartScreen setShowStart={setShowStart} /> : null}
      </div>
      <div className={s.colors}>
        <Colors setColor={setColor} />
      </div>
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
