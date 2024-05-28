import React, { useEffect } from "react";
import StatisticCard from "../../molecules/StatisticCard";
import { useListCurrentGenerations } from "../../../shared/hooks/use-list-generation";
import { GENERATION_ICONS } from "../../../shared/contants/generatio";

const StatisticCardList = () => {
  const { data, error } = useListCurrentGenerations();

  useEffect(() => {
    if (data) console.log("data", data);
    if (error) console.log("error", error);
  }, [data, error]);

  return (
    <div className="statistic-card-container">
      {data?.generationmix.map((fuelEle, ind) => (
        <StatisticCard
          key={ind + fuelEle.fuel}
          value={fuelEle.perc}
          unity="%"
          title={fuelEle.fuel}
          iconName={GENERATION_ICONS[fuelEle.fuel]}
        />
      ))}
    </div>
  );
};
export default StatisticCardList;
