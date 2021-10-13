import React from "react";
import { useDispatch } from "react-redux";
import { getGifs } from "../../actions";
import { useState } from "react";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(() => e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    (async () => {
      dispatch(await getGifs(value));
    })();
    setValue(() => "");
  };

  return (
    <div>
      <label>Search</label>
      <input name="search" value={value} onChange={onChange} />
      <button onClick={onClick}>Buscar</button>
    </div>
  );
}

export default Search;
