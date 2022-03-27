import React from "react";
import Invite from "../assets/invite.png";
import Invest from "../assets/invest.png";
import Saving from "../assets/savings.png";
import "../styles/savings.css";

const Savings = () => {
  return (
    <div className="savings__card">
      <div className="saving__card">
        <div>
          <p className="text__title ">Create a savings plan</p>
          <p className="text__content savings__text">Earn up to 12%</p>
        </div>
        <div className="img__wrapper-savings">
          <img className="savings__img" src={Saving} alt="icon" />
        </div>
      </div>

      <div className="invest__card">
        <div>
          <p className="text__title ">Invest in a Female Farmer</p>
          <p className="text__content invest__text">
            Get up to 25% returns per anum
          </p>
        </div>
        <div className="img__invest">
          <img src={Invest} alt="icon" />
        </div>
      </div>
      <div className="invite__card">
        <div>
          <p className="text__title text__invite ">
            Invite your girls to HerVest
          </p>
          <p className="text__content text__share">Share you girl code.</p>
        </div>
        <div className="share__code">
          <button>HG7FIB</button>
          <div>
            <p>share</p>
          </div>
        </div>
        <div className="img__invite">
          <img src={Invite} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Savings;
