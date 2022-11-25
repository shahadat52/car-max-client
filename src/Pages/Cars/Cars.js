import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Car from "./Car";

const Cars = () => {
  const cars = useLoaderData();
  console.log(cars);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto">
        {cars.map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Cars;
