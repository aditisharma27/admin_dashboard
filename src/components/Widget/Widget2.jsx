import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import order from "../../Images/order.png";
import "./widget.scss";

const Widget = () => {
  
  return (
    <div className="widget">
     <img src={order} alt="" className="order" />
      <div className="left">
        <span className="title"> 
        Orders
        </span>
        <span className="counter">$2.4 K
        <div className="lesspercentage">
          <ArrowDownwardIcon />
          2% <p>this month</p>
      </div></span>
      </div>
    </div>
  );
};

export default Widget;
