import React from "react";
import DashboardWlc from "../../DashboardWlc/DashboardWlc";
import Review from "../../Review/Review";
import Brands from "../Brands/Brands";
import Carouse from "./Carousel";

const Home = () => {
  return (
    <div className="">
      <DashboardWlc />
      <Carouse />
      <Brands />
      <Review />
     


    </div>
  );
};

export default Home;
