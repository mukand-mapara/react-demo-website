import React from "react";
import Laptop from "../Assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 p-4">
  <img
    className="w-[300px] md:w-[500px] mt-4 md:mt-0 mx-auto md:mx-0"
    src={Laptop}
    alt="Laptop"
  />
  <div className="flex flex-col justify-center pt-8 md:pt-0 p-4 md:min-h-[calc(100vh-100px)]">
    <p className="text-[#00df9a] font-bold text-center md:text-left">
      DATA ANALYTICS DASHBOARD
    </p>
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left">
      Manage Data Analytics Centrally
    </h1>
    <p className="text-center md:text-left mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      accusantium expedita architecto labore quod laudantium quo provident
      natus consequuntur animi, consequatur facere cumque sequi
      dignissimos repellendus. Obcaecati dolorem excepturi libero.
    </p>
    <button className="bg-black text-[#00df9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
      Get Started
    </button>
  </div>
</div>
    </div>
  );
};

export default Analytics;
