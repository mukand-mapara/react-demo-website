import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-40 text-white px-4">
      <div className="mx-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & trick to optimize your flow
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 px-1">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium px-6 ml-4 my-4">
              Notify Me
            </button>
          </div>
          <p>
            We care about te protetion of your data. Read our
            <span className="text-[#00df9a]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
