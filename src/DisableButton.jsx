import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1em 2em;
  background-color: lightgray;

  input + & {
    background-color: lightblue;
    /* padding: 1em 2em; */
  }
`;

const DisableButton = () => {
  const inputRef = useRef();
  const [val, setVal] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handelChange = (e) => {
    setVal(e.target.value);
  };

  console.log(val, Button);

  return (
    <>
      <div>
        <input
          type="text"
          ref={inputRef}
          onChange={handelChange}
          style={{ padding: "1em 2em", marginRight: "0.5em" }}
        />
        <Button disabled={val.length === 0}> Submit </Button>
      </div>
    </>
  );
};

export default DisableButton;
