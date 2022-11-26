import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div className="overflow-x-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={booking.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking.title}</td>
                <td>{booking.price}$</td>

                <td>
                  {/* {booking.price && !booking.paid && (
                    // <Link to={`/dashboard/payment/${booking._id}`}>
                    //   <button className="btn btn-primary btn-sm">Pay</button>
                    // </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )} */}
                  <button className="btn btn-primary btn-sm">Pay</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
