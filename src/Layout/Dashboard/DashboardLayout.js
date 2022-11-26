import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
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

        
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content mt-[50px]">
          <li>
            <Link to="/dashboard">My Products</Link>
          </li>
          <li>
            <Link to="/dashboard/allUsers">All users</Link>
          </li>
          <li>
            <Link to="/dashboard/addCar">Add Car</Link>
          </li>
          <li>
            <Link to="/dashboard/sellers">All seller</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
