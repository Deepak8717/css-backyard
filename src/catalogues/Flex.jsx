import React from "react";
import { Link } from "react-router-dom";
import Main from "../layout/Main";
import Navbar from "../layout/Navbar";
const Flex = () => {
  return (
    <Main>
      <Navbar />
      <div className="my-24">
        <div className="my-12 h-36 bg-[#01AE6E] text-white flex flex-col justify-center items-center">
          <h3 className="text-3xl background my-2">Learn Flexbox</h3>
          <Link
            to="/lesson/flex/introduction"
            className="p-2 bg-[#DDC694] w-24 text-black font-medium text-xl text-center rounded-lg"
          >
            Start
          </Link>
        </div>
        <div className="capitalize border-b-2 border-black text-2xl">
          overview
        </div>
        <div className="my-8 max-w-[720px]">
          <div className="my-8">
            <h4 className="my-2 text-2xl font-medium">What is flexbox ?</h4>
            <span className="text-xl">
              Flexbox is a one-dimensional layout method for arranging items in
              rows or columns
            </span>
          </div>
          <div className="my-8">
            <h4 className="my-2 text-2xl font-medium">Why Flexbox?</h4>
            <span className="text-xl">
              The following simple layout designs are either difficult or
              impossible to achieve with such float and positining in any kind
              of convenient, flexible way:
            </span>
            <ul className="list-disc  pl-8">
              <li className="my-4">
                Vertically centering a block of content inside its parent.
              </li>
              <li className="my-4">
                Making all the children of a container take up an equal amount
                of the available width/height, regardless of how much
                width/height is available.
              </li>
              <li className="my-4">
                Making all columns in a multiple-column layout adopt the same
                height even if they contain a different amount of content.
              </li>
            </ul>
          </div>
          <div className="my-8">
            <h4 className="my-2 text-2xl font-medium">Take-Away Skills:</h4>
            <ul className="list-disc  pl-8">
              <li className="my-4">
                Align items/content on horizontal/verticle axis
              </li>
              <li className="my-4">
                Alignment, justification and distribution of free space between
                items
              </li>
              <li className="my-4">
                Other flex properties such as
                <span className="bg-green-200 m-2">flex-grow</span>,
                <span className="bg-green-200 m-2">flex-shrink</span>,
                <span className="bg-green-200 m-2">flex-basis</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Flex;
