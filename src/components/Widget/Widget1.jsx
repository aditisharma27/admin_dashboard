import React from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import "./widget.scss";

const Widget = () => {

  return (
      <div className="widget">
        <CurrencyExchangeOutlinedIcon className="currency" />
      <div className="left">
        <span className="title"> 
        Earnings
        </span>
        <span className="counter">$198 K
        <div className="percentage">
          <ArrowUpwardOutlinedIcon />
          37.8% <p>this month</p>
      </div></span>
      </div>
      
    </div>
  );
};

export default Widget;
