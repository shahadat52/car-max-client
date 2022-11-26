import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full h-[800px] rounded-b-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_fill,h_720,w_1280/q_auto:eco/f_auto/v1/cms/uploads/eibaidzkfmzbwbpdnmir"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.pinimg.com/originals/7c/84/28/7c842811ffae6561da37cbbc3f442901.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://static.dezeen.com/uploads/2020/07/nissan-flat-logo_dezeen_2364_col_2-852x568.jpg"
          className="w-full"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// const Carouse = () => {
//   return (
//     <div className="h-[450px]">
//       <Carousel>
//         <div>
//           <img
//             src="https://static.dezeen.com/uploads/2020/07/nissan-flat-logo_dezeen_2364_col_2-852x568.jpg"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://i.pinimg.com/originals/7c/84/28/7c842811ffae6561da37cbbc3f442901.jpg"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmM4huwSBWM21dc04k_O-zx1b7EiE9B619Q&usqp=CAU"
//             alt=""
//           />
//         </div>
//       </Carousel>
//     </div>
//   );
// };
// export default Carouse;
