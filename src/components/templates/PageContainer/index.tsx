import React, { type FC } from "react";
import { IPageContainer } from "./type";
import "./style.css";

const PageContainer: FC<IPageContainer> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

export default PageContainer;
