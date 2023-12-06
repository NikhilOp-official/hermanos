import React from "react";
import img2 from "../images/img2.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Section1 = () => {
  return (
    <section className="h-full w-full pt-2 flex flex-col md:flex-row md:justify-around my-2 md:my-5 ">
      <div className="w-full md:w-1/2">
        <div className="p-4 md:p-16  md:pt-0 md:py-2 pt-0 pb-4  "> 
          {" "}
          <h1 className="text-2xl  md:text-5xl font-semibold ">
            Treatment Overview
          </h1>
        </div>
        <div className="pl-5 md:pl-16 py-2 md:py-5 ">
          {" "}
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aliquid ipsa harum deserunt voluptatem, eius facilis laudantium vel
            cumque sunt molestias ex?
          </p>
        </div>
        <div className="pl-5 md:pl-16 py-2 md:py-5 ">
          {" "}
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aliquid ipsa harum deserunt voluptatem, eius facilis laudantium vel
            cumque sunt molestias ex? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus quisquam sunt quam eius illum unde libero porro aliquam non.
          </p>
        </div>
        <div className="pl-5 md:pl-16 py-2 md:py-5 ">
          {" "}
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aliquid ipsa harum deserunt voluptatem, eius facilis laudantium vel
            cumque sunt molestias ex?
          </p>
        </div>
      </div>
      <div className="h-96 w-full md:w-1/2  pl-15 ">
        <LazyLoadImage className="w-full h-full" height={350}
                  width={560} src={img2} alt="img" effect="blur" />
      </div>
    </section>
  );
};

export default Section1;
