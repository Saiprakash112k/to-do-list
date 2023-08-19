import React, { useState } from "react";
import Child from "./ChildComponenet";
const Parent = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const AddClick = () => {
    if (value !== "") {
      setData([...data, value]);
      setValue("");
    }
  };
  const RemoveEle = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };
  return (
    <>
      <input
        placeholder={"enter your name"}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          AddClick();
        }}
      >
        add
      </button>
      <Child list={data} Remove={RemoveEle} />
    </>
  );
};
export default Parent;
