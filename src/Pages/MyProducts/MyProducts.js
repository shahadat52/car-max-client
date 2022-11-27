import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/myProducts?email=${user?.email}`;
  const { data: products = [], refetch } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(products);

  const deleteProduct = (product) => {
    console.log(product);
    fetch(`http://localhost:5000/myProduct/${product._id}`, {
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
    <div className="overflow-x-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={product.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.title}</td>
                <td>{product.resellPrice}$</td>

                <td>
                  {/* {booking.price && !booking.paid && (
                  // <Link to={`/dashboard/payment/${booking._id}`}>
                  //   <button className="btn btn-primary btn-sm">Pay</button>
                  // </Link>
                )}
                {booking.price && booking.paid && (
                  <span className="text-green-500">Paid</span>
                )} */}
                  <button className="btn btn-primary btn-md">Pay</button>
                </td>
                <td>
                  <button
                    onClick={() => deleteProduct(product)}
                    className="btn btn-warning btn-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
