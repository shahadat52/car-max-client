import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Payments = () => {
    const { user } = useContext(AuthContext);
    const order = useLoaderData()
    const { title, price, image, meetingLocation, _id, phone } = order

    const handlePayment = (event) => {
        event.preventDefault()
        const form = event.target
        const customerName = form.name.value;
        const productName = form.title.value
        const location = form.location.value;
        const email = form.email.value;
        const currency = form.currency.value;
        const postcode = form.postcode.value;
        const phone = form.phone.value;
        const address = form.address.value
        // console.log(customerName, productName, location,price, email, currency, postcode, phone);

        const order = {
            serviceId: _id,
            customerName,
            email,
            phone,
            address,
            productName,
            location,
            currency,
            postcode
        }
        fetch("https://carmax-server.vercel.app/payment", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('CarMaxToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url)
            })



    }
    return (
        <div>
            <h2 className="text-2xl">Payments</h2>
            <p>Please pay <strong>${price}</strong> for your booking on {title} </p>
            <div className='flex justify-between mt-16'>
                <div>
                    <img src={image} className='w-5/6 h-full rounded' alt="" srcset="" />
                </div>
                <form
                    onSubmit={handlePayment}
                >
                    <div className='grid grid-cols-2 gap-4  '>
                        <div className=''>
                            <input name='title' type="text" value={title} className="input input-bordered w-full  mb-2 " />
                            <input name="price" type="text" value={price} className="input input-bordered w-full mb-2" />
                            <input name="location" type="text" value={meetingLocation} className="input input-bordered w-full mb-2" />
                            <input name="email" type="text" value={user.email} className="input input-bordered w-full mb-2 " />


                        </div>
                        <div>
                            <input name='name' type="text" value={user.displayName} className="input input-bordered w-full mb-2" />
                            <select name='currency' className="select select-bordered w-full mb-2 ">
                                <option disabled selected value="BDT">BDT</option>
                                <option value="USD">USD</option>
                                <option value="RUPEE">RUPEE</option>
                            </select>
                            <input name='postcode' type="text" placeholder="Enter Your Postcode" className="input input-bordered w-full mb-2" />
                            <input name='phone' type="text" value={phone} className="input input-bordered w-full mb-2" />
                        </div>
                    </div>
                    <textarea name='address' className="textarea textarea-bordered w-full mb-2" placeholder="Enter Your address"></textarea>
                    <input className='w-full btn btn-sm  rounded-sm mt-2 bg-gray-400' type="submit" value="Pay" />
                </form>
            </div>
        </div>
    );
};

export default Payments;