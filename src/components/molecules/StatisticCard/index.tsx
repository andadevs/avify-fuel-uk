import React, { type FC } from "react";
import { ICardNumberProps } from "./type";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
library.add(fas);

const StatisticCard: FC<ICardNumberProps> = ({
  value,
  unity,
  title,
  iconName,
}) => {
  return (
    <div className="statistic-card">
      <h3 className="card-header">Flue</h3>
      <h1 className="big-number">
        <span className="value">{value}</span>
        <span className="unity">{unity}</span>
      </h1>
      <h2 className="card-title">{title}</h2>
      <div className="icon-container">
        <FontAwesomeIcon className="icon-box" icon={iconName} />
      </div>
    </div>
  );
};

export default StatisticCard;
