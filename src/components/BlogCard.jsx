import React from "react";
import blogimg from "../assets/blog1.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="flex flex-col justify-center border border-gray-200 rounded-lg shadow-lg">
      <img
        className="w-full h-64 object-cover rounded-t-lg"
        src={blogimg}
        alt="Blog"
      />
      <div className="p-6">
        <h1 className="text-xl font-semibold text-[#343148] mb-2">
          Lorem ipsum dolor
        </h1>
        <div className="flex flex-row gap-4 text-sm text-gray-500 mb-4">
          <p>Tech Updates</p>
          <p>01-Jan-2025</p>
          <p>5 min read</p>
        </div>
        <p className="text-[#7e7e81] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          autem?
        </p>
        <NavLink
          to="/blog"
          className="font-bold text-[#343148] hover:text-[#F7CAC9] flex items-center"
        >
          Read More
          <ArrowForwardIosIcon className="ml-2" />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
