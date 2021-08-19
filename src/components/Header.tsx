import React from "react";
import { IHeader } from "../interface/common";

const Header = ({ text }: IHeader) => {
  return (
    <div className="flex justify-center p-6 text-4xl" style={{ height: "10%" }}>
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
