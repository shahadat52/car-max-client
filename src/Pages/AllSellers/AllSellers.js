import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const AllSellers = () => {

  const { user } = useContext(AuthContext);
  const url = "https://carmax-server.vercel.app/users";

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });


  const deleteBuyer = (product) => {
    console.log(product);
    fetch(`https://carmax-server.vercel.app/allUsers/${product._id}`, {
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

  const allSellers = users.filter(selle => selle.seller === true)
  console.log('salara', allSellers);
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allSellers &&
            allSellers?.map((allSeller, i) => (
              <tr key={allSeller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={allSeller?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{allSeller?.name}</td>
                <td>{allSeller?.email}</td>{allSeller?.seller && <td>Seller</td>}<td>
                  <button
                    onClick={() => deleteBuyer(allSeller)}
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

export default AllSellers;
