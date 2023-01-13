import React, { PureComponent } from 'react';
import { PieChart, Pie,Cell} from 'recharts';
import StackedAreaChart from './AreaChart';


import { Card, Col, Row } from 'antd';
const Graph = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card bordered={false}>
           <StackedAreaChart />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <PieCharts />
        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);
export default Graph;

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 150 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class PieCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
