import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const BookingModal = ({ setModalControler, specificCar }) => {
  const { user } = useContext(AuthContext);
  console.log(specificCar);

  const time = new Date().getTime();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const price = form.location.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(location, name, email, phone, price, time);
    // setModalControler(false);
    const booking = {
      meetingLocation: location,
      title: name,
      email,
      phone,
      price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Good job!", "Booking successful!", "success");
          form.reset();
        } else {
          Swal.fire("Opps", "Booking Not Successful", "error");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"> </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={time}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="itemName"
              type="text"
              defaultValue={specificCar.title}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="itemName"
              type="text"
              defaultValue={specificCar.resellPrice}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting location"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              htmlFor="booking-modal"
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
