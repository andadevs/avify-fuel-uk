import React, { type FC } from "react";
import "./style.css";
import { IPageHeader } from "./type";

const PageHeader: FC<IPageHeader> = ({ children }) => {
  return <div className="page-header">{children}</div>;
};

export default PageHeader;
