import React from "react";
import Grid from "../../Assets/Grid.jpg";

export const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Travelsupport</small>
          <h2>Plan Your travel with Confidence</h2>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv flex">
            <div className="singleInfo">
              <span className="number colorOne">01</span>
              <h4>Travel Reqirements for dubai</h4>
              <p>
                Depending on your nationality, you might need a visa to enter
                Dubai. Citizens of certain countries can obtain a visa on
                arrival, while others might need to apply for a visa in advance.
                Some nationalities are visa-exempt. Check with the UAE embassy
                or consulate in your country for the latest visa requirements
              </p>
            </div>
            <div className="singleInfo">
              <span className="number colorTwo">02</span>
              <h4>Flight Information</h4>
              <p>
                Make sure you have the necessary flight documents, including
                your passport, boarding pass, and any required visas. Check with
                your airline for any specific requirements they might have
              </p>
            </div>
            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Transportation</h4>
              <p>
                Research transportation options in advance, such as public
                transportation, taxis, or rideshare services. Familiarize
                yourself with local transportation guidelines and requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="imgDiv flex">
          <img src={Grid} alt="flight images" />
        </div>
      </div>
    </div>
  );
};
