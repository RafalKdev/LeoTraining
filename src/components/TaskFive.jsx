import { useState, useEffect } from "react";

// /**
//   // Sample
//   {
//     id: 1,
//     name: "Elon Musk",
//     username: "EMusk",
//     email: "sapcex@musk.com",
//     phone: "1-234-5678-78",
//     website: "https://www.spacex.com/"
//   }
// **/
const url = "https://jsonplaceholder.typicode.com/users/1";
const TaskFive = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch(url);
      const data = await respone.json();
      setUserData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <li>Id:{userData.id}</li>
        <li>Name:{userData.name}</li>
        <li>Username:{userData.username}</li>
        <li>Email:{userData.email}</li>
        <li>Phone:{userData.phone}</li>
        <li>Website:{userData.website}</li>
      </ul>
    </div>
  );
};

export default TaskFive;
