import React from "react";

function Myfuncomponents({ data }) {
  return (
    <div>
      {" "}
      <button onClick={data.setters.inc}>+</button>
      <button onClick={data.setters.dec}>-</button>
    </div>
  );
}

export default Myfuncomponents;
