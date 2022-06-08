import { Input } from "postcss";
import React from "react";
import Main from "../../layout/Main";
import Navbar from "../../layout/Navbar";

const Flex = () => {
  return (
    <Main>
      <Navbar />
      <div className="w-[100%]  absolute top-1/4 md:top-1/2 z-[-1]  flex flex-col-reverse md:flex-row shadow-lg">
        <div className="md:w-[50%] md:h-[60vh] bg-white p-8 rounded-b md:rounded-l">
          <h2 className="text-xl tracking-wide  my-4 py-2">
            To start using the Flexbox model, you need to first define a flex
            container.
          </h2>

          <pre className="bg-stone-800 text-white text-sm md:text-md lg:text-lg">{`
  <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
          `}</pre>
          <h2 className="text-xl tracking-wide  my-4 py-2">
            Now just change the display property of flex-container from block to
            flex and see the magic.
          </h2>
          <pre className="bg-stone-800 text-white text-sm md:text-md lg:text-lg">{`flex-container {`}</pre>
          <pre className="bg-stone-800 text-white  text-sm md:text-md lg:text-lg">
            {`     display:`}
            <input />
          </pre>
          <pre className="bg-stone-800 text-white text-sm md:text-md lg:text-lg">{`  }`}</pre>
        </div>
        <div className="md:w-[50%] md:h-[60vh] bg-stone-800 p-4 text-white rounded-t md:rounded-r flex justify-center items-center ">
          <div className="w-[80%] mx-auto  p-12 m-12 border-2 border-white ">
            <div className="w-12 h-12 border-2 border-white m-2 flex justify-center items-center mx-auto">
              1
            </div>
            <div className="w-12 h-12 border-2 border-white m-2 flex justify-center items-center mx-auto">
              2
            </div>
            <div className="w-12 h-12 border-2 border-white m-2 flex justify-center items-center mx-auto">
              3
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Flex;
