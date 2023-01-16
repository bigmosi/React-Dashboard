import React, { PureComponent } from 'react';
import { PieChart, Pie,Cell} from 'recharts';
import RechartsExample from './AreaChart';
import ProductTable from './Product';


const Graph = () => (
      <div className='d-flex containerChart'>
       <div className='graph-container'>
       < RechartsExample />
       </div>
       <div className='graph-container d-flex justify-content-center'>
       <PieCharts />
       </div>
       <div className='graph-container'>
       <ProductTable />
       </div>
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
      <PieChart width={200} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
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
