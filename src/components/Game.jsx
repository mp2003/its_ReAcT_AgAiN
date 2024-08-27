import React, { useEffect, useState } from "react";
import "./Game.css";

const generateRandomNumber = () => {
  let num1, num2;
  num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  num2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  let res = num1 * num2;
  // console.log(num1);
  return [num1, num2, res];
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [val, setVal] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);

  useEffect(() => {
    const [newNum1, newNum2, newRes] = generateRandomNumber();
    setNum1(newNum1);
    setNum2(newNum2);
    setRes(newRes);
  }, [score]);

  // console.log(num1, num2, res);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = () => {
    Number(val) === res ? setScore(score + 1) : setScore(score - 1);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setVal(" ");
    console.log(res, " value ", val);
  };
  // console.log(ans);

  return (
    <>
      <div className="box">
        <div className="heading">
          <h2>Answer the Question</h2>
          <p>score : {score}</p>
        </div>

        <p className="ques-p">
          What is the value of : {num1} * {num2}
        </p>

        <form className="ans-form" onClick={handleForm}>
          <input
            type="text"
            placeholder="enter your answer"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Game;
