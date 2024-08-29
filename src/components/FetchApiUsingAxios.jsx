import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchApiUsingAxios = () => {
  const [userData, setUserData] = useState({});
  // const fetchAPI = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((Response) => Response.json())
  //     .then((data) => setUserData(data[0]));
  // };
  // fetchAPI()
  const axiosAPI = async ()=>{
    let response = axios.get("https://jsonplaceholder.typicode.com/users");
    console.log((await response).data);
    // console.log((await response).status,(await response).config,(await response).request,(await response).headers);
  }

  axiosAPI();

  return (
    <>
      <div className="border-gray-600 border-2 p-4 m-4 w-[45%]">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong>{" "}
          {userData.name || "(Need to populate name here)"}
        </p>
        <p>
          <strong>Website: </strong>
          {userData.website || "(Need to populate website here)"}
        </p>
        <p>
          <strong>Email: </strong>
          {userData.email || "(Need to populate email here)"}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone || "(Need to populate phone here)"}
        </p>
      </div>
    </>
  );
};

export default FetchApiUsingAxios;
