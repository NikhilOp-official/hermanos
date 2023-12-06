import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 h-16 w-full text-white  ">
      <div className="w-auto flex items-center justify-between mx-10">
        <div className="">
          <ul className="flex justify-around items-center ">
            <li className=" rounded-lg text-lg hover:bg-blue-600 p-2">Home</li>
            <li className="ml-7 rounded-lg text-lg hover:bg-blue-600 pl-4">About Us</li>
            <li className="ml-7  rounded-lg text-lg hover:bg-blue-600 p-2">Treatments+</li>
            <li className="ml-7  rounded-lg text-lg hover:bg-blue-600 p-2">Destinations+</li>
            <li className="ml-7  rounded-lg text-lg hover:bg-blue-600 p-2">Hospitals</li>
            <li className="ml-7  rounded-lg text-lg hover:bg-blue-600 p-2">FAQs</li>
            <li className="ml-7 rounded-lg text-lg hover:bg-blue-600 p-2">Blog</li>
            <li className="ml-7 rounded-lg text-lg hover:bg-blue-600 p-2">Request A Quote</li>
          </ul> 
        </div>

        <div className="bg-blue-600 w-72 h-16 flex justify-center items-center">
          
         <div className="pl-5">🔍</div> <div className="pl-5"><input className="placeholder-white opacity-80 text-lg bg-blue-600" type="text" placeholder="Search" /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
