import React, { useState } from "react";

const Add = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const handelChange = (e) => {
    if (e.target.id === "1") {
      setNum1(Number(e.target.value));
    } else {
      setNum2(Number(e.target.value));
    }
  };
  const checkNumber = () => {
    return !isNaN(num1) && !isNaN(num2);
  };

  const handelClick = () => {
    if (checkNumber()) {
      setAnswer(num1 + num2);
    } else {
      alert("Please enter valid number");
    }
  };
  console.log(num1, num2);

  return (
    <>
      <h1 className="ml-2 text-3xl font-bold"> Adding Two Number</h1>
      <input
        type="text"
        id="1"
        onChange={handelChange}
        className="border-[1px] border-gray-300 mt-4 ml-2"
      />
      <br />
      <input
        type="text"
        id="2"
        onChange={handelChange}
        className="border-[1px] border-gray-300 mt-2 ml-2"
      />
      <br />
      <button
        className="ml-2 mt-4 border-gray-600 border-[1.5px] p-2"
        onClick={handelClick}
      >
        Add Two Number
      </button>
      <p className="ml-2 mt-4">
        {" "}
        Total : <span>{answer}</span>
      </p>
    </>
  );
};

export default Add;
