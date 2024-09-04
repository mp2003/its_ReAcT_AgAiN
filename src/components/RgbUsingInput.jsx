import React, { useState } from "react";

const RgbUsingInput = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleChange = (e) => {
    if (e.target.name === "red") {
      setRed(Math.floor(Number(e.target.value)));
    } else if (e.target.name === "green") {
      setGreen(Math.floor(Number(e.target.value)));
    } else if (e.target.name === "blue") {
      setBlue(Math.floor(Number(e.target.value)));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`RGB value: (${red}, ${green}, ${blue})`);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };
  // console.log(red, green, blue);

  return (
    <>
      <div className="mt-4 ml-4">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="red" className="mr-4">
            {" "}
            Enter the value of Red :
          </label>
          <input
            onChange={handleChange}
            value={red}
            type="text"
            name="red"
            className="border-2 border-slate-500 rounded-md w-1/12 pl-2 text-black"
          />

          <label htmlFor="green" className="mr-4">
            {" "}
            Enter the value of Green :
          </label>
          <input
            onChange={handleChange}
            value={green}
            type="text"
            name="green"
            className="border-2 text-black border-slate-500 rounded-md w-1/12 pl-2"
          />

          <label htmlFor="blue"> Enter the value of Blue :</label>
          <input
            onChange={handleChange}
            value={blue}
            type="text"
            name="blue"
            className="border-2 border-slate-500 rounded-md text-black w-1/12 pl-2"
          />
          <button
            type="submit"
            className="border-2 border-slate-300 w-1/12 mt-4 rounded-md p-1 text-black hover:bg-green-500 hover:text-white"
          >
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
};

export default RgbUsingInput;
