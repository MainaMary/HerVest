import React from "react";
import Union from "../assets/Union.png";
import HerVest from "../assets/HerVest.png";
import "./sidebar.css";
import { menuItems } from "./menuData";
import { Link } from "react-router-dom";
const Sidebar = () => {
  
  return (
    <div className="sidebar__wrapper">
      <div className="logo__wrapper">
        <img src={Union} alt="union" className="union__logo logo" />
        <img src={HerVest} alt="hervest" className="hervest__logo logo" />
        <div className="menu__icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <h2 className="menu__title">menu</h2>
      <ul className="nav__items">
        {menuItems.map((item) => {
          console.log(item);
          return (
            <li className="list__items" key={item.id}>
              <div className="icon__wrapper">
                <img className='sidebar__icon' src={item.icon} alt="dashboard" />
              </div>
              <div>
                <Link className="nav__link" to={item.labelLink}>
                  {item.label}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
