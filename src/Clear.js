import { useState } from "react";

export default function Clear(props) {
  const [value, setvalue] = useState("");

  function removeValue() {
    if (value === "") return alert("Enter Value to Remove");
    let finalvalue = "";
    for (let a = 0; a < props.list.length; a++) {
      if (props.list[a].toLowerCase() === value.toLowerCase()) finalvalue = a;
    }
    if (finalvalue.length !== 0) {
      props.list.splice(finalvalue, 1);
      props.search([...props.list]);
    } else {
      alert("No Record Found");
    }
    setvalue("");
  }

  return (
    <div>
      Enter here to Remove from List :
      <input
        type="text"
        placeholder="Enter here to remove"
        value={value}
        onChange={(event) => {
          setvalue(event.target.value);
        }}
      />
      <button onClick={removeValue}>Remove</button>
    </div>
  );
}
