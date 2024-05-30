import React from "react";

const Cardser = (props) => {
  return (
    <div className="w-full flex flex-col items-center border gap-3 p-4 -z-10">
      <div className="w-full bg-[#F7CAC9] p-10 text-center">
        <h1 className="text-3xl font-semibold">{props.head}</h1>
        <p className="p-2">
          <span className="text-4xl font-bold">₹{props.rs}</span> / Starting
          from Dec 1
        </p>
      </div>
      <div className="w-full">
        <p className="text-center p-2">15 Days training program</p>
        <hr />
        <p className="text-center p-2">Cover all the topics of OOP</p>
        <hr />
        <p className="text-center p-2">5 Days money back guarantee</p>
        <hr />
        <p className="text-center p-2">Live classes on Google Meet</p>
        <hr />
        <p className="text-center p-2">Class recordings available</p>
        <hr />
      </div>
      <button className="py-2 px-4 mb-5 transition duration-300 text-[#343148] bg-[#F7CAC9] hover:text-[#F7CAC9] hover:bg-[#343148]">
        Learn More
      </button>
    </div>
  );
};

export default Cardser;
