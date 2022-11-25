import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Shared/Spinner";

const Car = ({ car }) => {
  console.log(car);
  const {
    title,
    company,
    description,
    img,
    location,
    seller,
    mobile,
    usingTime,
    time,
    date,
    odo,
    purchaseYear,
    condition,
    resellPrice,
    newPrice,
  } = car;
  return (
    <div>
      <div className="max-w-lg p-4 shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <div className="">
            <h1 className="text-2xl font-bold">{title}</h1>

            <div className="">
              <h2>
                Posted on {date}, {time},
              </h2>
              <h2 className="mb-5">
                Location <span className="font-semibold">{location}</span>
              </h2>
            </div>

            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center ">
              <h2 className="mt-5">
                <span className="text-[#19642d] font-bold shadow-md">
                  USD ${resellPrice}
                </span>
                <span className="text-xs ml-2">Negotiable</span>
              </h2>
            </div>
            <div>
              <h3>
                <span className="text-sm"> Sell by </span>
                <span className="font-bold">{seller}</span>
              </h3>
              <h2>
                Mobile <span className="font-semibold">{mobile}</span>
              </h2>
              <h2>
                <span> Used only </span>{" "}
                <span className="font-semibold"> {usingTime} months</span>
              </h2>
              <h2>
                Odo Meter: <span className="font-semibold">{odo} km</span>
              </h2>
              <h2>
                Year of purchase:
                <span className="font-semibold"> {purchaseYear}</span>
              </h2>
              <h2>
                Brand New Price: USD
                <span className="font-semibold"> ${newPrice}</span>
              </h2>
            </div>
          </div>
          <div className="space-y-2">
            <p className="leading-snug dark:text-gray-400">{description}</p>
            <div className="flex justify-center">
              {/* <Link
                to="#"
                class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Book Now
                </span>
              </Link> */}

              <Link
                href="#_"
                class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-[#ffff] hover:text-[black]  hover:font-bold bg-gray-500 rounded-lg group"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#cccaca] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span class="relative">Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
