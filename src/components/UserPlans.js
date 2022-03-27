import React from "react";
import PiggyBank from "../assets/piggybank.png";

const UserCards = () => {
  return (
    <>
      <div className="card__wrapper">
        <div className="icon__text">
          <div className="card__icons">
            <img alt="icon" src={PiggyBank} />
          </div>
          <div className="card__text">
            <p>Save for rainy days</p>
          </div>
        </div>
        <p className="amount__text">N400.000</p>
        <div className="flex__boxes">
            <div className="line__one"></div>
            <div className="line__two"></div>
        </div>
      </div>

    </>
  );
};

const UserPlans = () => {
  return (
    <div>
      <div>
        <p  className="text__plans">Watch your plans</p>
        <p className="text__goal">A goal without a plan is just a wish</p>
      </div>

      <div className="card__container">
        <UserCards />
        <UserCards />
        <UserCards />
      </div>

    </div>
  );
};

export default UserPlans;
