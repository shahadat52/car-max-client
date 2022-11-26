import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import Car from "./Car";

const Cars = () => {
  const cars = useLoaderData();
  const [modalControler, setModalControler] = useState(true);
  const [specificCar, setSpecificCar] = useState({});
  useEffect(() => {}, [modalControler]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto">
        {cars.map((car) => (
          <Car key={car._id} setSpecificCar={setSpecificCar} car={car}></Car>
        ))}
      </div>
      <div>
        <BookingModal
          specificCar={specificCar}
          setModalControler={setModalControler}
        ></BookingModal>
      </div>
    </div>
  );
};

export default Cars;
// {modalControler && (
//   <BookingModal
//     specificCar={specificCar}
//     setModalControler={setModalControler}
//   ></BookingModal>
// )}
