import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: '2018',
    react: 1042,
    vue: 2400,
  },
  {
    // name: '0',
    react: 3000,
    vue: 2210,
  },
  {
    // name: 'Page C',
    react: 2000,
    vue: 2290,
  },
  {
    name: '2020',
    react: 2780,
    vue: 2000,
  },
  {
    name: '2021',
    react: 1890,
    angular: 4800,
    vue: 2181,
  },
  {
    name: '2022',
    react: 2390,
    vue: 2500,
  },
  {
    name: '2023',
    react: 3490,
    vue: 2100,
  },
];

const RechartsExample = () => {
  return (
    <LineChart width={250} height={300} data={data} dot={false}>
      <Line type="monotone" dataKey="react" strke="#2196f3" dot={false} fill='red' />
      <Line type="monotone" dataKey="angular" strke="#2196f3" dot={false} />
      <Line type="monotone" dataKey="vue" strke="#2196f3" dot={false} />
      {/* <CartesianGrid stroke='#ccc' /> */}
      <XAxis tick={false} />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart >
  );
}

export default RechartsExample;