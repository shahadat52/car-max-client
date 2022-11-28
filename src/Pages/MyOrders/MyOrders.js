import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import Spinner from "../../Shared/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://carmax-server.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('CarMaxToken')}`
        }
      });
      const data = await res.json();

      return data;
    },
  });
  refetch()
  console.log(bookings);

  const deleteProduct = (product) => {
    console.log(product);
    fetch(`https://carmax-server.vercel.app/myOrders/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("CarMaxToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire("Delete", "Successful Deleted", "success");
        }
      });
  };

  return (
    <div>


      {bookings?.length ? <><div className="overflow-x-auto ">
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

                    <button
                      onClick={() => deleteProduct(booking)}
                      className="btn btn-warning btn-md"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div></> : <><h1 className="text-red-500 text-4xl grid h-screen place-items-center">Sorry You have no booking</h1></>}

    </div>
  );
};

export default MyOrders;
