import React from "react";
import "./mediagallery.css";
import "../../../Nav Components/AboutUs/1Style.css";

const Mediagallery = () => {
  return (
    <>
      <div className="bodyy">
        <h4 className="heading">Media Gallery</h4>
        <div className="displayblock">
          <div className="scroll snaps-inline">
            <div className="pics">
              <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a15658359c01-10-2017.jpeg" />
            </div>
            <div className="pics">
              <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a1565d0bf605-07-2017.jpg" />
            </div>
            <div className="pics">
              <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a1566887de09-10-2017.jpg" />
            </div>
            <div className="pics">
                <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a1566b3f389.jpg" />
            </div>
            <div className="pics">
              <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a1566deec210.jpg" />
            </div>
            <div className="pics">
              <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a156995f65andhrajyothi.jpg"  />
            </div>
            <div className="pics">
              <img src="https://api.mlritm.ac.in//images/gallery/big/5b3a157cd47cascan0111.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mediagallery;
