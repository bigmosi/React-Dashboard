import React from "react";


const SalesTable = () => {
    return (
     <div className="sales-main">
        <div>
        <div>
          <h2>Overview</h2>
          <p>This Month</p>
         <div className="d-flex justify-content-around ">
            <h2>$24,568</h2>
            <p className="bg-blue1">+2.65%</p>
        </div>
      </div>
        <div className="sales-container">
           <div className="sub">
                <p>Orders</p>
                <h5>5,643</h5>
            </div>
            <div className="sub">
                <p>Sales</p>
                <h5>16,273</h5>
            </div>
           <div className="sub">
                <p>Order Value</p>
                <h5>12.03%</h5>
            </div>
            <div className="sub">
                <p>Customers</p>
                <h5>21,456</h5>
            </div>
           <div className="sub">
                <p>Income</p>
                <h5>$35,652</h5>
            </div>
            <div className="sub">
                <p>Exenses</p>
                <h5>$12,248</h5>
            </div>
        </div>
     </div>
     </div>
    );
}

export default SalesTable;