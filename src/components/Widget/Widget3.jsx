import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalance from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./widget.scss";

const Widget = ({ type }) => {
  
  return (
    <div className="widget">
    <AccountBalance className="balance" />
      <div className="left">
        <span className="title"> 
        Balance
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
