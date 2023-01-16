import React from "react";
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const ProductTable = () => {
    return (
        <div className="product-table">
            <div className="d-flex justify-content-between">
                <h5>Top Product</h5>
                <Monthly />
            </div>
            <div className="d-flex justify-content-between">
                <span className="borderAround">#1</span>
                <div>
                    <p>Polo blue T-shirt</p>
                    <span>$25.4</span>
                </div>
                <span>3.2k</span>
            </div>
            <div className="d-flex justify-content-between">
                <span className="borderAround">#2</span>
                <div>
                    <p>Polo blue T-shirt</p>
                    <span>$25.4</span>
                </div>
                <span>3.2k</span>
            </div>
            <div className="d-flex justify-content-between">
                <span className="borderAround">#3</span>
                <div>
                    <p>Polo blue T-shirt</p>
                    <span>$25.4</span>
                </div>
                <span>3.2k</span>
            </div>
            <div className="d-flex justify-content-between">
                <span className="borderAround">#4</span>
                <div>
                    <p>Polo blue T-shirt</p>
                    <span>$25.4</span>
                </div>
                <span>3.2k</span>
            </div>
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
  const Monthly = () => (
    <Dropdown
      menu={{
        items,
      }}
    >
      <div onClick={(e) => e.preventDefault()}>
        <Space>
          Monthly
          <DownOutlined />
        </Space>
      </div>
    </Dropdown>
  );

export default ProductTable;