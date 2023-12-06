import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options1 } from "../utils/constants";
import { orthoDoctors } from "../utils/constants";

const Doctors = () => {

  

  
  return (
    <section className="mt-20 bg-green-100 w-full h-full pb-20">
      <div className="font-bold text-5xl flex flex-col justify-center items-center">
        <span className="text-red-500 p-24 pb-3 text-3xl">Doctors</span>
        <span>
          <span>Top Orthopedic</span>
          <span className="text-blue-500"> Doctors</span>
        </span>
      </div>

      <OwlCarousel className="owl-theme" {...options1}>
        {orthoDoctors.map((doctor,index)=>(
          <div key={index} className="item w-[400px]" >
          <h4 className="h-[400px] w-full">
          <div className="w-full px-11 mt-11 h-full
           ">
             <div className="h-full w-full bg-white shadow-2xl m-4">
               <div className=" w-full h-2/3  p-4">
                 <div className="bg-pink-300 w-full h-full"></div>
               </div>
               <div className=" flex flex-col justify-center items-center w-full h-1/3 p-4">
                 <span className="text-red-500 font-semibold text-xl">
                   {doctor.name}
                 </span>
                 <span className="font-semibold text-xl">
                   {" "}
                 {doctor.location}
                 </span>
                 <span className="font-semibold text-xl text-gray-400">
                   {doctor.degree}
                 </span>
               </div>
             </div>
            
           </div>
          </h4>
         </div>
        ))}
        
       
      </OwlCarousel>
    </section>
  );
};

export default Doctors;

