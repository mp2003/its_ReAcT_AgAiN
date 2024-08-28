import React from "react";

const Child = (props) => {
  const handelClick = () => {
    props.updateVal("updated from Child");
  };
  return (
    <>
      <div className="border-gray-300 border-2 p-4 m-4 ">
        Child
        <br />
        <button
          className="mt-2 border-gray-600 border-[1px] p-2 cursor-pointer "
          onClick={handelClick}
        >
          Change Parent Value
        </button>
      </div>
    </>
  );
};

export default Child;
