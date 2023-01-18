import React from "react";
import { Card,  Progress } from 'antd';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import USA from "../images/bestphoto.JPG";

const LeftContainer = () => {
    return (
        <div className="site-card-border-less-wrapper">
        <Card
          bordered={false}
        >
             
          <div>
          <div className="bg-primary text-center">
                <img src={USA} alt="React Logo" style={{width: 60, borderRadius: 50}} />
              </div>
             <div className="text-center">
                <h2>Jennifer</h2>
                <p>Product Designer</p>
                <div className="d-flex justify-content-between">
                   <div>
                     <h2>1,269</h2>
                     <p>Products</p>
                   </div>
                   <hr />
                   <div>
                     <h2>5.2k</h2>
                     <p>Followers</p>
                   </div> 
                </div>
                <hr />
                <space>
                  <div className="d-flex justify-content-between">
                    <p className="d-flex align-items-start">Earning</p>
                    <ExclamationCircleOutlined className="exclamation-cricle" />
                  </div>

                  <Progress type="circle" percent={76} />
                  <h2>$26,256</h2>
                  <p>Earning</p>
                  <div className="d-flex justify-content-around">
                    <p>+2.56%</p>
                    <p>From previous period</p>
                  </div>
                </space>
                <hr />
                <div>
                  <h6 className="d-flex align-items-start">Recent Activity</h6>
                  <div className="d-flex">
                    <div>
                        <h3>12</h3>
                        <p>Sep</p>
                    </div>
                    <p className="descrition">Responded to need "Volunteer Activities"</p>
                  </div>
                  <div className="d-flex">
                    <div>
                        <h3>11</h3>
                        <p>Sep</p>
                    </div>
                    <p className="descrition">Everyone realizes would be desirable... Read more</p>
                  </div>
                  <div className="d-flex">
                    <div>
                        <h3>10</h3>
                        <p>Sep</p>
                    </div>
                    <p className="descrition">Join the group boardmanship</p>
                  </div>
                  <div className="d-flex">
                    <div>
                        <h3>9</h3>
                        <p>Sep</p>
                    </div>
                    <p className="descrition">Responded to need "Volunteer Activities"</p>
                  </div>
                </div>
             </div>
          </div>
        </Card>
      </div>
    );
}

export default LeftContainer;

