import React, { useState } from "react";
import Search from "./search.js";

import "./styles.css";

const list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];

function App() {
  const [search, setSearch] = useState(list);
  const [type, setType] = useState("");

  function handleSearch(event) {
    if (event.target.value === "") return setSearch(list);

    const finalv = list.filter((value) => {
      return value.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setSearch(finalv);
  }

  return (
    <>
      <div className="app">
        Enter:
        <input
          type="text"
          placeholder="type here to save"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <button
          onClick={() => {
            list.push(type);
            setSearch([...list]);
            setType("");
          }}
        >
          Click to Save
        </button>
        <Search onChange={handleSearch} data={search} />
      </div>
    </>
  );
}

export default App;
