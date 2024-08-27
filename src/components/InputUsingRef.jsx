import React, { useEffect, useRef } from "react";

const InputUsingRef = () => {
  let inputRef = useRef();
  //   console.log(inputRef.current.value);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  console.log(inputRef.current.value);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          inputRef.current.value = e.target.value;
        }}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Submit
      </button>
    </>
  );
};

export default InputUsingRef;
