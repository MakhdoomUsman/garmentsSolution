import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto xl:px-28 lg:px-10  px-5  ">
      {children}
    </div>
  );
};

export default Container;
