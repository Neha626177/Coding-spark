import React from "react";
import img from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen py-[1.5rem] z-10 text-white bg-[#f66733] fixed flex flex-row justify-center items-center">
      <div className="w-[1150px] flex flex-row items-center">
        <div className="w-1/2">
          <img className="w-16" src={img} alt="Logo" />
        </div>
        <div className="w-1/2">
          <ul className="flex flex-row justify-end">
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              <NavLink to="/events" activeClassName="active">
                Events
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              <NavLink to="/course" activeClassName="active">
                Course
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              <NavLink to="/team" activeClassName="active">
                Team
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-[#fc7e50] cursor-pointer">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
