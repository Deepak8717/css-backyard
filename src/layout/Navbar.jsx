import React from "react";
import { Link } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="fixed  max-w-[1296px] w-[90%] top-0 py-4 bg-[#fff0e5]">
      <div className="text-center  flex justify-between items-center ">
        <Link to="/home">
          <div className="text-2xl font-medium tracking-widest">
            <FiActivity className="text-3xl inline mx-2" />
            <span>css-backyard</span>
          </div>
        </Link>

        <div className="">
          <Link to="/home" className="mx-8 hidden md:inline">
            Home
          </Link>
          <Link to="/catalog" className="hidden md:inline">
            Catalog
          </Link>
          <GiHamburgerMenu className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
