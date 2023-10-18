import React from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import sales from "../../Images/totalsales.png";
import "./widget.scss";

const Widget = () => {
 
  return (
    <div className="widget">
      <img src={sales} alt="" className="sales" />
      <div className="left">
        <span className="title"> 
        Orders
        </span>
        <span className="counter">$89 K
        <div className="percentage">
          <ArrowUpwardOutlinedIcon />
          11% <p>this month</p>
      </div></span>
      </div>
    </div>
  );
};

export default Widget;
