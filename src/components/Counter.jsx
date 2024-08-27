import React, { useState } from "react";

const counter = () => {
  const [val, setVal] = useState(0);
  const handlePlus = () => {
    setVal((v) => (v = v + 5));
  };
  const handleSub = () => {
    setVal((v) => (v = v - 1));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handlePlus}>+</button>
        <p>{val}</p>
        <button onClick={handleSub}>-</button>
      </div>
      <hr />
    </>
  );
};

export default counter;
