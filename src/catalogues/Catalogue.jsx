import React from "react";
import { Link } from "react-router-dom";
import Main from "../layout/Main";
import Navbar from "../layout/Navbar";

const Catalogue = () => {
  return (
    <Main>
      <Navbar />

      <div className="my-48">
        <h3 className="text-3xl text-center">Explore Catalogs</h3>
        <div className="fluid-grid my-12 mx-auto justify-center cursor-pointer ">
          <Link to="/catalog/flex">
            <div className="flex justify-center items-center h-72 bg-white border border-slate-600 ">
              Flex
            </div>
          </Link>

          <div className="flex justify-center items-center h-72 bg-white border border-slate-600 ">
            Grid
          </div>
          <div className="flex justify-center items-center h-72 bg-white border border-slate-600 ">
            Box-Model
          </div>
          <div className="flex justify-center items-center h-72 bg-white border border-slate-600 ">
            Box-Model
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Catalogue;
