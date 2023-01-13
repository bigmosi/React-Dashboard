import React from "react";
import { SettingOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Image } from "antd";
import Logo from "../images/display-grid.svg";
import USA from "../images/usa.png"

const NavigationHeader = () => {
    return (
       <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Dashboard</a>
    <div>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><SearchOutlined /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src={USA} alt="React Logo" style={{width: 20,}} /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><BellOutlined /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src={Logo} alt="React Logo" /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"><SettingOutlined /></a>
        </li>
        <li class="nav-item">
          <a><Image width={35} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /></a>
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