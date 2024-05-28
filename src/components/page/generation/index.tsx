import StatisticCardList from "../../organisms/StatisticCardList";
import PageContainer from "../../templates/PageContainer";
import Header from "../../atoms/Header";
import StatisticChart from "../../organisms/StatisticChart";
import PageHeader from "../../templates/PageHeader";
import ChangeView from "../../atoms/ChangeView";
import { useState } from "react";

const GenerationPage = () => {
  const [isDefaultView, setIsDefaulView] = useState(true);

  const changeViewHandler = () => {
    setIsDefaulView((prevValue) => !prevValue);
  };

  return (
    <PageContainer>
      <PageHeader>
        <Header title="Generation" />
        <ChangeView changeHandler={changeViewHandler} />
      </PageHeader>
      {isDefaultView ? <StatisticCardList /> : <StatisticChart />}
    </PageContainer>
  );
};

export default GenerationPage;
