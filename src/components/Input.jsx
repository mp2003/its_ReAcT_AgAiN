import React, { useState } from "react";

const Input = () => {
  const [val, setVal] = useState("hello");
  const [ans, setAns] = useState("-");
  const handleChange = (e) => {
    let v = e.target.value;
    setVal(v);
  };

  const handleClick = () => {
    setAns(val);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        {" "}
        Submit
      </button>
      <p>{val}</p>
      <h1>{ans}</h1>
      <hr></hr>
    </>
  );
};

export default Input;
