import React from 'react';
import car from '../../assets/admin.json'
import Lottie from "lottie-react";

const AdminBanner = () => {
    return (
        <div>
            <div className="relative   ">
                <div className="">
                    <Lottie animationData={car} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AdminBanner;