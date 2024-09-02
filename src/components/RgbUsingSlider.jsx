import React, { useState } from "react";

const RgbUsingSlider = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const handleChange = (e) => {
    // console.log(e.target.name);

    if (e.target.name === "red") {
      setRedValue(e.target.value);
    } else if (e.target.name === "green") {
      setGreenValue(e.target.value);
    } else if (e.target.name === "blue") {
      setBlueValue(e.target.value);
    }
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    document.body.style.backgroundColor = color;
    document.body.style.color = "white";
  };
  //   console.log(redValue, blueValue, greenValue);

  return (
    <>
      <div className="mx-10 my-10">
        <form action="">
          <label htmlFor="red">Red : </label>
          <input
            type="range"
            id="red"
            name="red"
            min="0"
            max="255"
            value={redValue}
            onChange={handleChange}
            className="mr-8"
          />
          <label htmlFor="green">Green : </label>
          <input
            type="range"
            id="green"
            name="green"
            min="0"
            max="255"
            value={greenValue}
            onChange={handleChange}
            className="mr-8"
          />
          <label htmlFor="blue">Blue : </label>
          <input
            type="range"
            id="blue"
            name="blue"
            min="0"
            max="255"
            onChange={handleChange}
            value={blueValue}
          />
        </form>
      </div>
    </>
  );
};

export default RgbUsingSlider;
