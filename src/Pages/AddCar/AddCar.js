import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const time = new Date();
  const company = () => {
    <select name="" id="">
      toyota
    </select>;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const condition = form.condition.value;
    const company = form.company.value;
    const img = form.img.value;
    const resellPrice = form.resellPrice.value;
    const newPrice = form.newPrice.value;
    const location = form.location.value;
    const usingTime = form.usingTime.value;
    const seller = form.seller.value;
    const verified = form.verified.value;
    const purchaseYear = form.purchaseYear.value;
    const odo = form.odo.value;
    const mobile = form.phone.value;
    // const time = form.time.value;
    // const date = form.date.value;
    const description = form.description.value;
    const carInfo = {
      title,
      condition,
      company,
      img,
      resellPrice,
      newPrice,
      location,
      usingTime,
      seller,
      verified,
      purchaseYear,
      odo,
      time,
      mobile,
      description,
      email: user?.email,
    };
    fetch("http://localhost:5000/car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carInfo),
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
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-[50px]">
          <input
            name="title"
            type="text"
            placeholder="Car Title"
            required
            className="input w-full input-bordered"
          />
          <input
            name="seller"
            type="text"
            defaultValue={user?.displayName}
            required
            placeholder="Seller Name"
            className="input w-full input-bordered"
          />
          <input
            name="condition"
            type="text"
            required
            placeholder="condition"
            className="input w-full input-bordered"
          />
          <select
            name="company"
            id=""
            className="select w-full select-bordered"
          >
            <option value="toyota">Toyota</option>
            <option value="nissan">Nissan</option>
            <option value="honda">Honda</option>
          </select>
          <input
            name="img"
            type="text"
            required
            placeholder="imag url"
            className="input w-full input-bordered"
          />
          <input
            name="resellPrice"
            type="text"
            required
            placeholder="Resell Price"
            className="input w-full input-bordered"
          />

          <input
            name="newPrice"
            type="text"
            required
            placeholder="New Price"
            className="input w-full input-bordered"
          />
          <input
            name="location"
            type="text"
            required
            placeholder="Location"
            className="input w-full input-bordered"
          />
          <input
            name="usingTime"
            type="text"
            required
            placeholder="Using Time"
            className="input w-full input-bordered"
          />

          <input
            name="verified"
            type="text"
            required
            placeholder="verified"
            className="input w-full input-bordered"
          />
          <input
            name="purchaseYear"
            type="text"
            required
            placeholder="Purchase Year"
            className="input w-full input-bordered"
          />
          <input
            name="odo"
            type="text"
            required
            placeholder="Odo meter"
            className="input w-full input-bordered"
          />
          {/* <input
          name="odo"
          type="text"
          required
          placeholder="Odo meter"
          className="input w-full input-bordered"
        /> */}
          <input
            name="description"
            type="text"
            required
            placeholder="Description"
            className="input w-full input-bordered"
          />
          <input
            name="phone"
            type="text"
            required
            placeholder="Phone Number"
            className="input w-full input-bordered"
          />
          <br />
          {/* <input
            htmlFor="booking-modal"
            className="btn btn-accent w-full"
            type="submit"
            value="Submit"
          /> */}
        </div>
        <input
          htmlFor="booking-modal"
          className="btn btn-accent w-full"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCar;
