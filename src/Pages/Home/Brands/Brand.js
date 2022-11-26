import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { img, name, tagline } = brand;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Company" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase text-white">{name}</h2>
        <p>{tagline}</p>
        <div className="card-actions justify-end">
          <Link to={`/cars/${name}`}>
            <button className="btn btn-primary">View All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
