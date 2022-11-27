import React, { useContext } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/UserContext";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
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
    <div className="overflow-x-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                {/* <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={booking.image} alt="" />
                    </div>
                  </div>
                </td> */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                {user.seller && <td>Seller</td>}
                {user.buyer && <td>Buyer</td>}

                <td>
                  {/* {booking.price && !booking.paid && (
                    // <Link to={`/dashboard/payment/${booking._id}`}>
                    //   <button className="btn btn-primary btn-sm">Pay</button>
                    // </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )} */}
                  <button className="btn btn-primary btn-md">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
