import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = [
  "biomass",
  "coal",
  "",
  "imports",
  "gas",
  "nuclear",
  "other",
  "hydro",
  "solar",
  "wind",
];
const dataChart = {
  labels,
  datasets: [
    {
      label: "",
      data: [9.3, 1.1, 18.5, 30.9, 19.1, 0, 1.9, 0, 19],
      borderWidth: 1,
      borderColor: "rgba(53, 162, 235, 0.5)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const StatisticChart = () => {
  return <Bar options={options} data={dataChart} />;
};

export default StatisticChart;
