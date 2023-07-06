import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId')


    return (
        <div>
            <div className="text-green-400 flex flex-col justify-center items-center h-screen">
                <p> Your Payment Successful</p>
                <p>Your transactionId is <strong>{transactionId}</strong> </p>
            </div>
            <button className="btn btn-primary block mx-auto print:hidden" onClick={()=> window.print()} >Print</button>
        </div>
    );
};

export default PaymentSuccess;