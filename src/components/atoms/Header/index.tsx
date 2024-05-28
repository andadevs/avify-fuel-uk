import { FC } from "react";
import { IHeader } from "./type";
import "./style.css";

const Header: FC<IHeader> = ({ title }) => {
  return (
    <h1 className="header">
      <span className="circle"></span>
      <span className="text">{title}</span>
    </h1>
  );
};

export default Header;
