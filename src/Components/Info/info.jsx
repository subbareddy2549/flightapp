import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";

export const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all over the world</h2>
          <button className="btn">viewall</button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book&Relax</span>
            <p>You can also book your flight ticket through phone call!</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <PiSealCheckFill className="icon" />
            </div>
            <span className="cardTitle">Smartchecklist</span>
            <p>You can also book your flight ticket through phone call!</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Savemore</span>
            <p>You can also book your flight ticket through phone call!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
