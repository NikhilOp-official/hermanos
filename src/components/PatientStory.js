import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../utils/constants";
import { patients } from "../utils/constants";

import 'react-lazy-load-image-component/src/effects/blur.css';


const PatientStory = () => {

  


  return (
    <section className="w-2/3 ">
      <div className="text-5xl font-semibold mb- ml-16   pt-0 pb-9 border-b-2 border-gray-400">
        Patient Stories & Videos
      </div>
      <OwlCarousel className="owl-theme" {...options}>
       {patients.map((story,index)=>( 
       
       
       
       <div  key={index} className="item">
          <div className="flex ">
            <div className="flex m-16 mt-7 mr-10  mb-0  pt-0 pb-5 text-xl flex-col border-2 border-gray-300 p-7">
              <div className="w-2/3 p-2">
                <span className="font-semibold">
                  {story.treatmentName}
                </span>
              </div>
              <div className="p-2">
                <img className="w-full"  src={story.img} alt="img" effect="blur"/>
              </div>
              <div className="flex ">
                <div className="h-20 w-24 my-4 ">
                  <img
                    className="h-full w-full rounded-full"
                    src={story.photo}
                    alt="img"
                    effect="blur"
                  />
                </div>
                <div className="flex flex-col p-7 font-semibold">
                  <span>{story.name}</span>
                  <span className="text-gray-500 ">{story.location}</span>
                </div>
              </div>
            </div>
           
          </div>
        </div>))}
      </OwlCarousel>
    </section>
  );
};

export default PatientStory;
  