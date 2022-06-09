import React from "react";

const Main = (props) => {
  return (
    <div className="max-w-[1296px] w-[90%] py-12 mx-auto relative">
      {props.children}
    </div>
  );
};

export default Main;
