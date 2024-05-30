import React from "react";
import CppImg from "../assets/c++.png";


const CardEve = () => {
  return (
    <div className="bg-white p-8 rounded border-[1px] transition duration-300 hover:bg-[#343148] group">
      <div className="w-[80px] mx-auto bg-[#F7CAC9]  circle rounded-full p-1 animation-none">
        <img src={CppImg} className="w-[80px] mx-auto " alt="" />
      </div>
      <h3 className="text-xl font-bold m-2 text-center transition duration-300 group-hover:text-[#F7CAC9]">
        C++ Workshop
      </h3>
      <p className="text-[#343148] text-[1.1rem] text-center transition duration-300 group-hover:text-white">
        The workshop will introduce you to online training sessions of C++ for
        beginners.
      </p>
    </div>
  );
};

export default CardEve;
