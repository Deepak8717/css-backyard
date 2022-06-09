import React, { useState } from "react";
import { motion } from "framer-motion";
import Main from "../../layout/Main";
import Navbar from "../../layout/Navbar";

const Flex = () => {
  const [display, setDisplay] = useState("block");
  const onChangeHandler = (e) => {
    setDisplay(e.target.value);
  };
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };
  return (
    <Main>
      <Navbar />
      <div className="w-[100%]  absolute top-1/4 md:top-1/2 z-[-1]  flex flex-col-reverse md:flex-row shadow-lg">
        <div className="md:w-[50%] md:h-[60vh] bg-white p-8 rounded-b md:rounded-l">
          <h2 className="text-xl tracking-wide  my-4 py-2 ">
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
            Now just change the display property of flex-container from
            <span className="bg-stone-600 text-white px-2 py-1 mx-1 rounded">
              block
            </span>
            to
            <span className="bg-stone-600 text-white px-2 py-1 mx-1 rounded">
              flex
            </span>{" "}
            and see the magic.
          </h2>
          <pre className="bg-stone-800 text-white text-sm md:text-md lg:text-lg pt-4 px-2 pb-2 ">{`.flex-container {`}</pre>
          <pre className="bg-stone-800 text-white  text-sm md:text-md lg:text-lg">
            {`   display:`}
            <input
              type="text"
              placeholder="block"
              className="bg-stone-600 text-white px-2 py-1 outline-none w-[50%] max-w-[12rem]"
              onChange={onChangeHandler}
            />
          </pre>
          <pre className="bg-stone-800 text-white text-sm md:text-md lg:text-lg px-4 pb-2">{`}`}</pre>
        </div>
        <div className="md:w-[50%] md:h-[60vh] bg-stone-800 p-4 text-white rounded-t md:rounded-r flex justify-center items-center ">
          <div
            className={`w-[80%] mx-auto h-[30vh] p-12 m-12 border-2 items-center border-white ${display}`}
          >
            <motion.div
              layout
              transition={spring}
              className="w-12 h-12 border-2 border-white m-2 flex justify-center items-center mx-auto bg-white text-black font-semibold"
            >
              1
            </motion.div>
            <motion.div
              layout
              transition={spring}
              className="w-12 h-12 border-2 border-white m-2 flex justify-center items-center mx-auto bg-white text-black font-semibold"
            >
              2
            </motion.div>
            <motion.div
              layout
              transition={spring}
              className="w-12 h-12 border-2 border-white m-2 flex justify-center items-center mx-auto bg-white text-black font-semibold"
            >
              3
            </motion.div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Flex;
