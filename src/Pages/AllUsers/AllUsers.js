import React, { useContext } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/UserContext";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const url = "http://localhost:5000/users";

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(users);
  const handleAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('CarMaxToken')}`
      }
    })

      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Admin", "Successful Make Admin", "success")
          refetch();
        }
      })
  }
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
                  {user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className="btn btn-primary btn-md">Make Admin</button>}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

{/* {booking.price && !booking.paid && (
                    // <Link to={`/dashboard/payment/${booking._id}`}>
                    //   <button className="btn btn-primary btn-sm">Pay</button>
                    // </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )} */}