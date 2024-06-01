import React from "react";
import { Tabs } from "antd";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import "./Tab.css";

const { TabPane } = Tabs;

const itemsTab1 = [
  {
    img: img1,
    children: "Mac",
  },
  {
    img: img2,
    children: "iPad",
  },
  {
    img: img3,
    children: "iPhone",
  },
  {
    img: img4,
    children: "Apple Watch",
  },
  {
    img: img5,
    children: "AirPods",
  },
];

const itemsTab2 = [
  {
    img: img6,
    children: "New Arrivals",
  },
  {
    img: img7,
    children: "Cases & Protection",
  },
  {
    img: img8,
    children: "Charging Essentials",
  },
  {
    img: img9,
    children: "MagSafe",
  },
  {
    img: img10,
    children: "Headphones & Speakers",
  },
];
const Tab = () => (
  <div className="center">
    <Tabs defaultActiveKey="1" className="wrapper">
      <TabPane tab="Browse by Product" key="1" className="item1">
        {itemsTab1.map((item, index) => (
          <div key={index} className="item">
            <p>{item.children}</p>
            <img src={item.img} alt={item.children} />
          </div>
        ))}
      </TabPane>

      <TabPane tab="Browse by Category" key="2" className="item2">
        {itemsTab2.map((item, index) => (
          <div key={index} className="item">
            <p>{item.children}</p>
            <img src={item.img} alt={item.children} />
          </div>
        ))}
      </TabPane>
    </Tabs>
  </div>
);




export default Tab;
