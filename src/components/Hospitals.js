import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options1 } from "../utils/constants";
import { hospitalDetail } from "../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Hospitals = () => {


  return (
    <section className="bg-white w-full h-full pb-20">
      <div className="font-semibold text-5xl flex flex-col justify-center items-center">
        <span className="text-red-500 p-32 pb-3 text-3xl">Hospitals</span>
        <span>
          <span>Recommended </span>
          <span className="text-blue-500">Hospitals</span>
        </span>
      </div>

      <OwlCarousel className="owl-theme" {...options1}>

        {hospitalDetail.map((hospital,index)=>( <div  key={index} className="item w-[400px]">
          <h4 className="h-[400px] w-full">
            <div
              className="w-full px-11 mt-11 h-full
          "
            >
              <div className="h-full w-full bg-white border-dotted border-2 border-red-500 rounded-lg shadow-2xl m-4">
                <div className=" w-full h-2/3 ">
                  <LazyLoadImage
                    className="bg-pink-300  h-full rounded"
                    src={hospital.img}
                  alt="img"
                  height={280}
                  width={308}
                  effect="blur"/>
                </div>
                <div className=" flex flex-col justify-center items-center w-full h-1/3 p-4">
                  <span className="text-red-500 font-semibold text-xl">
                    {hospital.name}
                  </span>
                  <span className="font-semibold text-xl">{hospital.location}</span>
                </div>
              </div>
              
            </div>
          </h4>
        </div>))}
       
        
      </OwlCarousel>

      <div className="flex justify-center font-semibold p-4 ">
        <span>Don't hesitate,contact us for better help and services.</span>
      </div>
    </section>
  );
};

export default Hospitals;
