import React from "react";
import { Link } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="text-center mt-8 flex justify-evenly items-center ">
      <div className="text-2xl font-medium tracking-widest">
        <FiActivity className="text-3xl inline mx-2" />
        <span>css-backyard</span>
      </div>
      <div className="">
        <Link to="" className="mx-8">
          Home
        </Link>
        <Link to="/catelog">Catalog</Link>
      </div>
    </div>
  );
};

export default Navbar;
