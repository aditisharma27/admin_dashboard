import React from 'react'
import './chart.scss'
//import  { PureComponent } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "January",
    SB: 4000,
    TA: 0,
    amt: 2400,
  },
  {
    name: "February",
    SB: 3000,
    TA: 0,
    amt: 2210,
  },
  {
    name: "March",
    SB: 2000,
    TA: 0,
    amt: 2290,
  },
  {
    name: "April",
    SB: 2780,
    TA: 0,
    amt: 2000,
  },
  {
    name: "MAY",
    SB: 1890,
    TA: 0,
    amt: 2181,
  },
  {
    name: "JUNE",
    SB: 2390,
    TA: 0,
    amt: 2500,
  },
  {
    name: "JULY",
    SB: 3490,
    TA: 0,
    amt: 2100,
  },
  {
    name: "August",
    SB: 3490,
    TA: 4300,
    amt: 2100,
  },
  {
    name: "September",
    SB: 3490,
    TA:0,
    amt: 2100,
  },
  {
    name: "November",
    SB: 3490,
    TA: 0,
    amt: 2100,
  },
  {
    name: "December",
    SB: 3490,
    TA:0,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Overview</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <BarChart
          width={730}
          height={250}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          data={data}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="gray"
            className="chatGrid"
          />
          <XAxis dataKey="name" />

          <Tooltip />
          <Legend />
          <Bar dataKey="SB" fill="#d7d7d7" />
          <Bar dataKey="TA" fill="#800880" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;