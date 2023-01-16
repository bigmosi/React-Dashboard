import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
    <div>
       <div className='d-flex justify-content-between'>
        <h5>User Activity</h5>
        <Activity />
       </div>
       <div className="container-span">
        <span>This Month</span>
        <h5>16,543</h5>
       </div>
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
    </div>
  );
}

const items = [
  {
    key: '1',
    type: 'group',
    label: 'Jan',
  },
  {
    key: '2',
    label: 'Feb',
  },
  {
    key: '3',
    label: 'March',
  },
  {
      key: '4',
      label: 'April',
    },
    {
      key: '5',
      label: 'May',
    },
];
const Activity = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <div onClick={(e) => e.preventDefault()}>
      <Space>
        User Activity
        <DownOutlined />
      </Space>
    </div>
  </Dropdown>
);

export default RechartsExample;