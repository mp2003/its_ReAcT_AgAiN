import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1em;
  background-color: #4caf50;
  margin-left: 2em;
  color: white;
`;
const SearchBar = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  return (
    <>
      <form action="">
        <label>item: </label>
        <input type="text" onChange={handleChange} />
        <Button>submit</Button>
        <p>value</p>
      </form>
    </>
  );
};

export default SearchBar;
