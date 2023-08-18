import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { PiVibrateFill } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { CgMenuRound } from "react-icons/cg";
import img from "../../Assets/img1.png";

export const Nav = () => {
  const [active, setActive] = useState("navbarMenu");
  const Shownav = () => {
    if (active === "navbarMenu") {
      setActive("navbarMenuRemove");
    } else {
      setActive("navbarMenu");
    }
  };

  return (
    <div className="navbar flex ">
      <div className="navbarOne flex">
        <div>
          <SiConsul />
        </div>
        <div className="none flex">
          <li className="flex">
            <PiVibrateFill /> Support
          </li>
          <li className="flex">
            <RiGlobalLine />
            Language
          </li>
        </div>

        <div className="atb flex">
          <span>Sign in</span>
          <span>Sign out</span>
        </div>
      </div>
      <div className="navbarTwo">
        <div className={active}>
          <ul className="menu flex ">
            <li className="listitem">
              <a href="/">Home</a>
            </li>
            <li className="listitem">
              <a href="/about">About</a>
            </li>
            <li className="listitem">
              <a href="/offers">Offers</a>
            </li>
            <li className="listitem">
              <a href="/Search">Seats</a>
            </li>
            <li className="listitem">
              <a href="/destination">destination</a>
            </li>
            <button className="btn flex btnOne">Contact</button>
          </ul>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={Shownav} className="toggleicon">
          <CgMenuRound className="icon" />
        </div>
      </div>
    </div>
  );
};
