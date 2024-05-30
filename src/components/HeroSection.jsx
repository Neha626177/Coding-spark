import React from "react";
import img from "../assets/landingPage.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#ff7242] py-[7rem] flex justify-center items-center">
      <div className="w-[95%]  flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center md:ml-10">
          <p className="text-4xl md:text-6xl text-[#343148] font-semibold text-center md:text-left">
            "Give a spark to your coding career with us."
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-[#343148] text-center md:text-left">
            A one-stop learning platform providing online coding courses to make
            you industry-ready.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#343148] py-2 px-4 mr-4 text-[#F7CAC9] transition duration-300 hover:bg-white hover:text-black">
              Contact Us
            </button>
            <button className="bg-[#343148] py-2 px-8 mr-4 text-[#F7CAC9] transition duration-300 hover:bg-white hover:text-black">
              Course
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-end">
          <img
            className="w-full md:w-[450px] max-w-md"
            src={img}
            alt="Landing Page"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
