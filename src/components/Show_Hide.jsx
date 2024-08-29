import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 0em;
  padding: 1em;
`;

const Body = styled.body`
  background-color: ${(props) => (props.isBlack ? "white" : "blue")};
  color: ${(props) => (props.isBlack ? "gray" : "black")};
  height: 95vh;
  width: 95%;
`;

const Show_Hide = () => {
  const [val, setVal] = useState(true);
  return (
    <>
      <Body isBlack={val}>
        <Button onClick={() => setVal((e) => !e)}>Toggle</Button>
        {val && (
          <p>click Toggle to {val ? <span> hide</span> : <span> show</span>}</p>
        )}
      </Body>
    </>
  );
};

export default Show_Hide;
