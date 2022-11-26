import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const DashboardLayout = () => {
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

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content mt-[50px]">
            <li>
              <Link to="/dashboard">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers">All users</Link>
            </li>
            <li>
              <Link to="/dashboard/AllSellers">All seller</Link>
            </li>
            <li>
              <Link to="/dashboard/AllBuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/addCar">Add Car</Link>
            </li>

            <li>
              <Link to="/dashboard/myProducts">My Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
