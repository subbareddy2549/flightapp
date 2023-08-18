import React from "react";
import { TiLocation } from "react-icons/ti";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

export default function Search() {
  return (
    <div className="search container section">
      <div className="sectioncontainer grid">
        <div className="btns flex">
          <div className="singlebtn">
            <span>Economy</span>
          </div>

          <div className="singlebtn">
            <span>BusinessClass</span>
          </div>

          <div className="singlebtn">
            <span>FirstClass</span>
          </div>
        </div>

        <div className="SerachInput flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <TiLocation className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input
                type="text"
                placeholder="Enter Your destination Location "
              />
            </div>
          </div>
        </div>
        <div className="SerachInput flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travellers</h4>
              <input type="text" placeholder="Add guest " />
            </div>
          </div>
        </div>
        <div className="SerachInput flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <SlCalender className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add date " />
            </div>
          </div>
        </div>
        <div className="SerachInput flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <SlCalender className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date " />
            </div>
          </div>
          <button className="btn btnblock flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
}
