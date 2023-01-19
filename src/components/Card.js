import { Card, Row } from 'antd';
import { PieChartOutlined } from "@ant-design/icons";

const CardHeader = () => (
  <div>
    <div className="subCol">
    <div className="card-header-container">
        <div className="main">
        <div bordered={false} className="innerCard">
          <div className="cardContainer">
          <div className='d-flex innerCardContainer'>
            <div className='bg-blue pie-card'><PieChartOutlined className='text-light' /></div>
            <div>
               <h6 className='text-primary'>Revenue</h6>
               <p>$21,456</p>
            </div>
          </div>
          <p className='text-danger'>+2.56%</p>
          </div>
        </div>
      </div>
       </div>
       <div className='card-header-container'>
        <div className="main">
        <div bordered={false} className="innerCard">
          <div className="cardContainer">
          <div className='d-flex innerCardContainer'>
            <div className='bg-blue pie-card'><PieChartOutlined className='text-light' /></div>
            <div>
               <h6 className='text-primary'>Revenue</h6>
               <p>$21,456</p>
            </div>
          </div>
          <p className='text-danger'>-0.84%</p>
          </div>
        </div>
      </div>
       </div>
       <div className='card-header-container'>
          <div span={6} className="main">
        <div bordered={false} className="innerCard">
          <div className="cardContainer">
          <div className='d-flex innerCardContainer'>
            <div className='bg-blue pie-card'><PieChartOutlined className='text-light' /></div>
            <div>
               <h6 className='text-primary'>Revenue</h6>
               <p>$21,456</p>
            </div>
          </div>
          <p className='text-danger'>-1.04%</p>
          </div>
        </div>
      </div>
       </div>
     
    </div>
  </div>
);
export default CardHeader;