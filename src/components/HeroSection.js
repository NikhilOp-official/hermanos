import React from "react";
import img1 from "../images/img1.jpg"
// mx-24 mt-24 w-1/2 h-44
const HeroSection = () => {
  return (
    <section>
    <div className=" relative w-full md:h-96">
    {" "}
    <img
      className="w-full h-72 md:h-96"
      src={img1}
      alt="hero"
    />
  </div>
  <div className="flex flex-col absolute top-1 md:top-16 inset-y-2 mx-10 md:mx-24 mt-24 w-3/6 h-44">
    <div className="">
      <h1 className="text-2xl md:text-5xl font-bold text-white">
        Total knee Replacement
      </h1>
      <div className=" py-2  md:py-5">
        <span className="text-white text-sm md:text-2xl">Total knee replacement is surgery to remove and replace the whole
      damaged knee joint with an artificial joint</span>
      </div>
      
    </div>
    <div className="">
      <button className="bg-blue-500 p-2 py-2 px-5 md:py-4 md:px-11 my-5 text-white font-bold text-xl hover:shadow-2xl hover:bg-blue-600">Enquire Now</button>
    </div>
  </div>
  </section>
   
  );
};

export default HeroSection;
