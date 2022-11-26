import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/myProducts?email=${user?.email}`;
  const { data: products = [] } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
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
                  <button className="btn btn-primary btn-sm">Pay</button>
                </td>
                <td>Delete</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
