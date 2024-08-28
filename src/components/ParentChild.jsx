import React, { useState } from "react";
import Child from "./Child";

const ParentChild = () => {
  const [val, setVal] = useState("I need to be updated from my child");

  return (
    <>
      <div className="border-gray-300 border-2 p-4 m-4">
        Parent
        <div className="p-4 m-4 w-[80%] border-pink-500 border-2">{val}</div>
      </div>
      <Child str={val} updateVal={setVal} />
    </>
  );
};

export default ParentChild;
