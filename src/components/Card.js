import { Card, Row } from 'antd';
import { PieChartOutlined } from "@ant-design/icons";

const CardHeader = () => (
  <div className="site-card-wrapper border d-flex justify-content-around">
    <Row gutter={16} className="subCol">
    <div className="card-header-container">
        <div className="main">
        <Card bordered={false} className="innerCard">
          <div className="cardContainer">
          <div className='d-flex'>
            <div className='bg-blue'><PieChartOutlined className='text-light' /></div>
            <div>
               <h6 className='text-primary'>Revenue</h6>
               <p>$21,456</p>
            </div>
          </div>
          <p>+2.56%</p>
          </div>
        </Card>
      </div>
       </div>
       <div className='card-header-container'>
        <div className="main">
        <Card bordered={false} className="innerCard">
          <div className="cardContainer">
          <div className='d-flex'>
            <div className='bg-blue'><PieChartOutlined className='text-light' /></div>
            <div>
               <h6 className='text-primary'>Revenue</h6>
               <p>$21,456</p>
            </div>
          </div>
          <p>+2.56%</p>
          </div>
        </Card>
      </div>
       </div>
       <div className='card-header-container'>
          <div span={6} className="main">
        <Card bordered={false} className="innerCard">
          <div className="cardContainer">
          <div className='d-flex'>
            <div className='bg-blue'><PieChartOutlined className='text-light' /></div>
            <div>
               <h6 className='text-primary'>Revenue</h6>
               <p>$21,456</p>
            </div>
          </div>
          <p>+2.56%</p>
          </div>
        </Card>
      </div>
       </div>
     
    </Row>
  </div>
);
export default CardHeader;