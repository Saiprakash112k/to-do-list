import React from "react";
const Child = (props) => {
  const liList = props.list.map((items, index) => {
    return (
      <li key={index}>
        {items}
        <button
          onClick={() => {
            props.Remove(index);
          }}
        >
          Remove
        </button>
      </li>
    );
  });
  return (
    <>
      <ul>{liList}</ul>
    </>
  );
};
export default Child;
