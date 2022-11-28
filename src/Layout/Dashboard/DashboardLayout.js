import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Navbar from "../../Shared/Navbar";

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const url = "https://carmax-server.vercel.app/users";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  const userAccess = users.find(use => use.email === user.email)
  console.log(users, user,);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="sm:mt-[400px] md:mt-[400px] lg:mt-[1px]">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-blue-600 mt-[50px]">


            {
              !userAccess?.seller && !userAccess?.buyer && !userAccess?.role && <Link to="/dashboard/myOrders">My Orders</Link>
            }

            {
              userAccess?.seller && <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
            }
            {
              userAccess?.buyer && <>
                <li>
                  <Link to="/dashboard/addCar">Add Car</Link>
                </li>

                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li></>
            }
            {
              userAccess?.role && <><li>
                <Link to="/dashboard/allUsers">All users</Link>
              </li>
                <li>
                  <Link to="/dashboard/AllSellers">All seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/AllBuyers">All Buyers</Link>
                </li></>
            }


          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
