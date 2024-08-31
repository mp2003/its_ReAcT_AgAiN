import React, { useState } from "react";

const PasswordObj = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "" || password.trim() === "") {
      alert("Please enter both User Name and Password");
      return;
    }
    console.log("Form submitted");
    // clear the input fields
    const userCredentials = {
      userId: userName,
      password: password,
    };

    console.log(userCredentials, JSON.stringify(userCredentials));
    setUserName("");
    setPassword("");
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //   console.log(userName, password);

  return (
    <>
      <form
        action=""
        className="ml-4 mt-4 flex gap-4 flex-col"
        onSubmit={handelSubmit}
      >
        <div className="username">
          <label className=""> UserName : </label>
          <input
            type="text"
            placeholder="Enter the User Name"
            className="border-2 border-gray-200 p-2 rounded-2xl"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="password">
          <label className=""> Password : </label>
          <input
            type="text"
            placeholder="Enter the Password"
            className="border-2 border-gray-200 p-2 rounded-2xl"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="border-2 border-green-500 w-20 p-2 rounded-2xl bg-green-600 text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default PasswordObj;
