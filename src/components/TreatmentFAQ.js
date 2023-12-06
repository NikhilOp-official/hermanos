import React, { useState } from "react";
import { FAQs } from "../utils/constants";
const TreatmentFAQ = () => {
   
  const [show,setShow]=useState(false)

const handleClick=()=>{
setShow(!show)
}

  return (
    <section className="w-full   md:w-2/3 mb-11   pt-7 border-dashed border-blue-500 border-b-2 pb-14">
      <div className="text-2xl  md:text-5xl font-semibold ml-5 mt-0 mb-0 md:m-16 md:mb-0  md:mt-7   pt-0 pb-4 md:pb-9 border-b-2 border-gray-300">
        Treatment FAQs 
      </div>  

    {FAQs.map((info,index)=>(
      <div  key={index} className="flex m-5 md:mb-5 md:p-5 md:mt-2 w-full md:m-16 mt-2 mb-0 pr-2 pt-2 pb-2  border-b-2 border-gray-300  cursor-pointer flex-col ">
      <div className="flex items-center" onClick={handleClick} ><span className="text-blue-500 font-bold text-2xl mr-5 cursor-pointer">{show?"-":"+"}</span>
      <span className="text-sm pr-5 md:text-xl font-semibold">{info.question}</span></div>
    { show && <div className="ml-10 md:pl-20 border-t-2 m-2 md:m-2 border-blue-500 ">
        <p className="border-l-4 text-sm md:text-lg pl-2 md:pl-4 m-2 md:m-4 font-normal  border-blue-500">{info.answer}</p>
      </div>}
    </div>

    ))} 
      
    </section>
  );
};

export default TreatmentFAQ;
