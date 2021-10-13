import React from "react";
import { useDispatch } from "react-redux";
import { getGifs, setSearchState } from "../../actions";
import { useState } from "react";
import s from "./Search.module.css";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(() => e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    (async () => {
      dispatch(await getGifs(value));
    })();
    dispatch(setSearchState());
    setValue(() => "");
  };

  return (
    <div className={s.container}>
      <form onSubmit={onSubmit}>
        <fieldset>
          <button type="submit">B</button>
          <input
            name="search"
            value={value}
            onChange={onChange}
            placeholder="Search..."
          />
        </fieldset>
      </form>
    </div>
  );
}

export default Search;
