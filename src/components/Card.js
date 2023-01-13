import { Card, Col, Row } from 'antd';
import { PieChartOutlined } from "@ant-design/icons";

const CardHeader = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false}>
          <div className="cardContainer">
          <div className='bg-blue'><PieChartOutlined className='text-light' /></div>
          <div>
          <h6 className='text-primary'>Revenue</h6>
           <p>$21,456</p>
          </div>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card  bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);
export default CardHeader;