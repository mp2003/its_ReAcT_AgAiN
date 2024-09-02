import React, { useState } from "react";
import "./ToDoList.css";
const ToDoList = () => {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  // console.log(arr);

  const handelClick = () => {
    console.log(val);
    setArr([{ value: val, key: Math.floor(Date.now() / 1000) }, ...arr]);
    setVal("");
  };

  const handelDelete = (key) => {
    let array = arr.filter((obj) => obj.key !== key);
    setArr(array);
  };
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-full gradient_bg">
        <div className="p-2 border-[1px] border-slate-700 w-[65%] flex justify-center items-center container_bg flex-col xl:w-[35%] ">
          <h1 className=" title">TODO List</h1>
          <div className="mt-6 mb-6">
            <input
              type="text"
              className="border-2 border-gray-400 rounded-md p-2"
              value={val}
              onChange={handleChange}
            />
            <button
              className="bg-green-300 p-2 ml-2 rounded-md font-bold font"
              onClick={handelClick}
            >
              ADD
            </button>
          </div>

          <div className="todo_Content mb-6">
            <ul>
              {arr.map((item) => {
                return (
                  <div
                    className="todo_item mb-2 flex justify-between items-center"
                    key={item.key}
                  >
                    <li
                      key={item.key}
                      className="w-full p-4 rounded-md bg-slate-800 text-white "
                    >
                      {item.value}
                    </li>
                    <button
                      className="p-2 ml-4 bg-white rounded-2xl"
                      onClick={() => handelDelete(item.key)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;



