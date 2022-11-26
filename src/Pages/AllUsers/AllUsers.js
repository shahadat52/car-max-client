import React, { useContext } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/UserContext";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  // fetch("http://localhost:5000/users")
  //   .then((res) => res.json())
  //   .then((data) => setAllUsers(data))
  //   .catch((err) => console.error(err));

  const url = "http://localhost:5000/users";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(users);

  return (
    <div>
      <h1>This is all users page</h1>
    </div>
  );
};

export default AllUsers;
