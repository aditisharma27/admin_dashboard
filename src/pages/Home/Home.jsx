import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget4 from "../../components/Widget/Widget4";
import Widget1 from "../../components/Widget/Widget1";
import Widget2 from "../../components/Widget/Widget2";
import Widget3 from "../../components/Widget/Widget3";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/chart/chart";
import List from "../../components/List/List";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget1 type="earning " />
          <Widget2 type="orders " />
          <Widget3 type=" balance " />
          <Widget4 type=" total sales " />
        </div>
        <div className="charts">
          <Charts />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Product Sell</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
