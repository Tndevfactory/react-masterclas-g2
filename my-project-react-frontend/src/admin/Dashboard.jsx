import { useState } from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  const [donut, setDonut] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });

  return (
    <div className=" h-full p-3  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
      <div className="bg-white p-3   rounded shadow-md">
        <Chart options={donut.options} series={donut.series} type="donut" />
      </div>
      <div className="bg-white p-3 rounded shadow-md">
        <Chart options={options} series={series} type="line" />
      </div>
      <div className="bg-white p-3 rounded shadow-md">
        <Chart options={options} series={series} type="bar" />
      </div>
      <div className="bg-white p-3 rounded shadow-md">
        <Chart options={options} series={series} type="bar" />
      </div>
    </div>
  );
};

export default Dashboard;
