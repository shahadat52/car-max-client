import React from "react";
import Brand from "./Brand";

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "toyota",
      tagline: "Today Tomorrow Toyota",
      img: "https://i.pinimg.com/originals/7c/84/28/7c842811ffae6561da37cbbc3f442901.jpg",
      // img: 'https://i.pinimg.com/originals/7c/84/28/7c842811ffae6561da37cbbc3f442901.jpg'
      // https://cdn.motor1.com/images/mgl/mJ22A/s3/toyota-c-hr-hy-power-concept-official-image.webp
    },
    {
      id: 2,
      name: "nissan",
      tagline: "Innovation That Excites ",
      img: "https://static.dezeen.com/uploads/2020/07/nissan-flat-logo_dezeen_2364_col_2-852x568.jpg",
    },
    {
      id: 3,
      name: "honda",
      tagline: "The Power of Dreams",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmM4huwSBWM21dc04k_O-zx1b7EiE9B619Q&usqp=CAU",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto ">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
