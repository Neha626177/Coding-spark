import React from "react";
import BlogCard from "./BlogCard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Blog = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center mt-12">
        <div className="flex flex-row justify-start items-center gap-2">
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
          <div>
            <p className="font-bold text-[#abaaad]">From Blog</p>
          </div>
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-extrabold mb-10">
        Latest Articles
      </h2>
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="w-full flex flex-row justify-center mt-10 mb-20 gap-4">
        <div
          className="w-[70px] h-[50px] bg-[#343148] cursor-pointer transition duration-500 hover:bg-[#F7CAC9] flex justify-center items-center text-[#F7CAC9] hover:text-[#343148]"
          aria-label="Previous"
          title="Previous"
        >
          <ArrowBackIosIcon />
        </div>
        <div
          className="w-[70px] h-[50px] bg-[#343148] cursor-pointer transition duration-500 hover:bg-[#F7CAC9] flex justify-center items-center text-[#F7CAC9] hover:text-[#343148]"
          aria-label="Next"
          title="Next"
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default Blog;
