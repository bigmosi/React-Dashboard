import React from "react";
import { SettingOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Image,  Badge } from "antd";
import Logo from "../images/display-grid.svg";
import USA from "../images/usa.png";
import photo from "../images/bestphoto.JPG";


const NavigationHeader = () => {
    return (
       <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary navContainer">
  <div className="container-fluid navContainer">
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
      <a className="navbar-brand  dashboard-title" href="/#">Dashboard</a>
    <div className="sideIcon">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 sideIcon1">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#"><SearchOutlined /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#"><img src={USA} alt="React Logo" style={{width: 20,}} /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
           <Badge count={4}>
           <BellOutlined />            
           </Badge>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#"><img src={Logo} alt="React Logo" /></a>
        </li>
        <li className="nav-item setting">
          <a clasNames="nav-link" href="/#"><SettingOutlined /></a>
        </li>
        <li className="nav-item">
          <a><img width={35} height={30} src={photo} className="rounded-photo" alt="" /></a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
       </div> 
    );
}

export default NavigationHeader;