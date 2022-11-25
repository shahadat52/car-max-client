import React from "react";
import Brand from "./Brand";

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "toyota",
      tagline: "Today Tomorrow Toyota",
      img: "https://cdn.motor1.com/images/mgl/mJ22A/s3/toyota-c-hr-hy-power-concept-official-image.webp",
      // img: 'https://i.pinimg.com/originals/7c/84/28/7c842811ffae6561da37cbbc3f442901.jpg'
    },
    {
      id: 2,
      name: "nissan",
      tagline: "The Power of Dreams",
      img: "https://static.dezeen.com/uploads/2020/07/nissan-flat-logo_dezeen_2364_col_2-852x568.jpg",
    },
    {
      id: 3,
      name: "honda",
      tagline: "Innovation That Excites",
      img: "https://w0.peakpx.com/wallpaper/300/289/HD-wallpaper-honda-vezel-car-japan-jdm-logo-pakistan-red-rs-turbo.jpg",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
