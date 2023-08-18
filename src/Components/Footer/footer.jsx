import React from "react";
import img from "../../Assets/img1.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { ImTwitter } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={img} className="logo" />
          </div>
          <p>Your mind should be stronger than your feeling,fly</p>
          <div className="socialicon flex">
            <BiLogoFacebookCircle className="icon" />
            <ImTwitter className="icon" />
            <FaYoutube className="icon" />
            <BiLogoPinterest className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="titleLink">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">checkin</a>
          </li>
          <li>
            <a href="">Manage Your Bookings</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="titleLink">Quickguide</span>
          <li>
            <a href="">Faq</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">RouteMap</a>
          </li>
          <li>
            <a href="">Ourcommunities</a>
          </li>
        </div>
      </div>
      <div className="copyrightDiv flex">
        <p>
          CourtesyDesign|Devoloped by{" "}
          <a href="https://emailto-bunnysubba2549@gmail.com" target="blank">
            FlightGo
          </a>
        </p>
      </div>
    </div>
  );
};
