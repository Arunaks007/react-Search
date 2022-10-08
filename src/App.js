import React, { useState } from "react";
import Clear from "./Clear.js";
import Search from "./search.js";

import "./styles.css";

var list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];

function App() {
  const [search, setSearch] = useState(list);
  const [type, setType] = useState("");

  function handleSearch(event) {
    if (event.target.value === "") return setSearch(list);

    const finalv = list.filter((value) => {
      return value.toLowerCase().includes(event.target.value.toLowerCase());
    });

    finalv.length !== 0 ? setSearch(finalv) : setSearch(["No items found"]);
  }

  return (
    <>
      <div className="head">Simple Search</div>
      <div className="app">
        Enter here to Save on List:
        <input
          id="Search"
          type="text"
          placeholder="type here to save"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <button
          onClick={() => {
            if (type.length !== 0 && isNaN(type)) {
              list.push(type);
              setSearch([...list]);
              setType("");
            } else {
              alert("Please Enter Valid Value, It should be a letter");
              setType("");
            }
          }}
        >
          Save
        </button>{" "}
        <br />
        <br />
        <Clear list={list} search={setSearch} />
        <br />
        <Search onChange={handleSearch} data={search} />
      </div>
    </>
  );
}

export default App;
