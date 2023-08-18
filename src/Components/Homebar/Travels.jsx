import React from "react";
import Paris from "../../Assets/Paris.jpg";
import Person from "../../Assets/person1.jpg";
import Dubai from "../../Assets/dubai.jpg";
import Person1 from "../../Assets/person2.jpg";
import London from "../../Assets/london.jpg";
import Person2 from "../../Assets/person3.jpg";
import Newyork from "../../Assets/newyork.jpg";
import Person3 from "../../Assets/person4.jpg";
const travelers = [
  {
    id: 1,
    destiatedImage: Paris,
    travelerImage: Person,
    travelerName: "Chidu",
    SocialLink: "@chidu35",
  },
  {
    id: 2,
    destiatedImage: Dubai,
    travelerImage: Person1,
    travelerName: "madhu",
    SocialLink: "@madhu32",
  },
  {
    id: 3,
    destiatedImage: London,
    travelerImage: Person2,
    travelerName: "harshi",
    SocialLink: "@harshi25",
  },
  {
    id: 4,
    destiatedImage: Newyork,
    travelerImage: Person3,
    travelerName: "subbu",
    SocialLink: "@subbu24",
  },
];
export const Travels = () => (
  <div className="travelers container section">
    <div className="sectionContainer">
      <h2>Top travelers of this month</h2>
      <div className="travelersContainer grid">
        {travelers.map(
          ({ id, destiatedImage, travelerImage, travelerName, SocialLink }) => {
            return (
              <div key={id} className="singleTraveler">
                <img src={destiatedImage} className="destiatedImage" />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{SocialLink}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  </div>
);
