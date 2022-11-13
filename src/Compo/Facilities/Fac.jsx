import React from "react";
import "./Fac.css";

import FacData from "./FacData";
import { FacDisplayAlgo } from "./FacDisplayAlgo";


export const Facilities = () => {
  return (
    <div id="Facilities">
      <h1 id="headingOfCompo">Facilities</h1>
      <div className="scrollerBoxx snaps-inline">
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={0} />
          </a>
        </div>
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={1} />
          </a>
        </div>
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={2} />
          </a>
        </div>
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={3} />
          </a>
        </div>
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={4} />
          </a>
        </div>
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={5} />
          </a>
        </div>
        <div className="BOXX">
          <a href="/">
            <FacDisplayAlgo data={FacData} index={6} />
          </a>
        </div>
      </div>
    </div>
  );
};
