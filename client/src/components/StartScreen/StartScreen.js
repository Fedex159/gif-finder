import React from "react";
import s from "./StartScreen.module.css";
import { useState } from "react";

function StartScreen({ setShowStart }) {
  const [animation, setAnimation] = useState(false);

  const onClick = () => {
    setAnimation(() => true);
    setTimeout(() => {
      setShowStart(() => false);
    }, 400);
  };

  return (
    <div className={s.container}>
      <div
        className={`${s.up} ${animation ? s.animUp : ""}`}
        style={
          animation
            ? { borderBottom: "1px solid var(--shadow-background)" }
            : {}
        }
      >
        <div
          onClick={onClick}
          className={s.btn}
          style={animation ? { display: "none" } : { display: "block" }}
        >
          Enter
        </div>
      </div>
      <div
        className={`${s.down} ${animation ? s.animDown : ""}`}
        style={
          animation ? { borderTop: "1px solid var(--shadow-background)" } : {}
        }
      ></div>
    </div>
  );
}

export default StartScreen;
