import React from "react";
import Avatar from "../assets/avatar.png";
import "../styles/dashboard.css";
import UserPlans from "../components/UserPlans";
import "../styles/userplans.css";
import Savings from "../components/Savings";
const userDetails = [
  {
    label: "Available balance",
    amount: "₦1,063,345.04",
  },
  {
    label: "impact invetsments ",
    amount: "₦1,007,345.04 ",
  },
  {
    label: "Total savings",
    amount: "₦2,007,345.04",
  },
  { label: "Total returns", amount: "₦56,000.00" },
];
const Card = ({ value }) => {
  return (
    <div className="account__wrapper">
      <p className="text__label">{value.label}</p>
      <p className="text__amount">{value.amount}</p>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div className="dashboard__wrapper">
      <div className="user__profile">
        <div className="avatar__wrapper">
          <img alt="avatar" src={Avatar} />
        </div>
        <div className="user__wrapper">
          <h4 className="upper__text">Hello</h4>
          <h2 className="user__name">Oluwabi</h2>
        </div>
      </div>

      <div className="account__details">
        {userDetails.map((value, index) => {
          return <Card key={index} value={value} />;
        })}
      </div>
     <UserPlans/>
     <Savings/>
    </div>
  );
};

export default Dashboard;
