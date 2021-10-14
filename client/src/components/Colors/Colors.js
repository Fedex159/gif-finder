import React from "react";
import s from "./Colors.module.css";

function Colors({ setColor }) {
  const onClick = (e) => {
    setColor(() => e.target.id);
  };

  return (
    <div className={s.container}>
      <div
        onClick={onClick}
        style={{ backgroundColor: "#1a202c" }}
        id="black"
      ></div>
      <div
        onClick={onClick}
        style={{ backgroundColor: "#4d1486" }}
        id="violet"
      ></div>
      <div
        onClick={onClick}
        style={{ backgroundColor: "#e8e4e4" }}
        id="white"
      ></div>
    </div>
  );
}

export default Colors;
