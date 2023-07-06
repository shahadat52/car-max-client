import React, { useContext, useEffect } from 'react';
import Lottie from "lottie-react";
import car from '../../assets/car.json'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const DashboardWlc = () => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6 lg:mt-8">
                        <div></div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                            Welcome to
                            <span className="inline-block text-blue-600  ml-1">CarMax</span>
                        </h2>
                        <p className="text-justify text-blue-600 md:text-lg">
                            Car is a very essential product for all of us. Many people use cars as a hobby, One should use the best vehicle for whatever the purpose,That's why if you want to buy a car with the lowest price and the highest quality, then you can definitely contact Car Max.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">



                    </div>
                </div>
                <div className="relative lg:w-1/2 ">
                    <div className=" ">
                        <Lottie animationData={car} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardWlc;