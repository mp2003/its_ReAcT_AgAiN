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
  const axiosAPI = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      ); // Await the response once
      let userData = response.data; // Access the data
      // console.log(userData);

      setUserData(userData[0]);

      // If you need to access other response properties:
      console.log(
        response.status,
        response.config,
        response.request,
        response.headers
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    axiosAPI();
  }, []);

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
