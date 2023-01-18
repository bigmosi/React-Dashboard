import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip
} from "recharts";
import SalesTable from "./SalesTable";
 
const data = [
  {
    name: "Jan",
    buy: 4000,
    sell: 2400,
  },
  {
    name: "Feb",
    buy: 3000,
    sell: 1398,
  },
  {
    name: "Mar",
    buy: 2000,
    sell: 9800,
  },
  {
    name: "Apr",
    buy: 2780,
    sell: 3908,
  },
  {
    name: "May",
    buy: 1890,
    sell: 4800,
  },
  {
    name: "Jun",
    buy: 2390,
    sell: 3800,
  },
  {
    name: "Jul",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Aug",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Sep",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Oct",
    buy: 3490,
    sell: 4300,
  },
];
 
export default function BarGraph() {
  return (
    <div className="d-flex bar-container">
      <SalesTable />
       <div>
       <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      style={{
        borderRadius: 10
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="buy" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
    </BarChart>
       </div>
    </div>
  );
}
