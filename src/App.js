import React, { useState } from "react";
import Search from "./search.js";

import "./styles.css";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [search, setSearch] = useState(list);

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
        <Search onChange={handleSearch} data={search} />
      </div>
    </>
  );
}

export default App;
