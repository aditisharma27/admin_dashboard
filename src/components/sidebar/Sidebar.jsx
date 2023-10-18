import React from "react";
import "./sidebar.scss";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import dashboard from "../../../src/Images/nut.png";
import product from "../../Images/boxes.png";
import promote from "../../Images/promotions.png";
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={dashboard} className="dash" alt="" />
        <span className="logo">Dashboard</span>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <FindInPageOutlinedIcon className="icon" alt="" />
            <span> Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <img src={product} className="icon" alt="" /> <span>Product</span> <ArrowForward className="arrow"/>
          </li>
          <li>
            <AccountBoxOutlinedIcon className="icon" />
            <span> Customers</span> <ArrowForward className="arrow1"/>
          </li>
          <li>
            <AccountBalanceWalletOutlinedIcon className="icon" />
            <span> Income</span>  <ArrowForward className="arrow"/>
          </li>
          <li>
            <img src={promote} className="icon" alt=""/>
            <span> Promote</span>  <ArrowForward className="arrow2"/>
          </li>
          <li>
            <LiveHelpOutlinedIcon className="icon" />
            <span> Help</span> <ArrowForward className="arrow3"/>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
