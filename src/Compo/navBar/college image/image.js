import React from "react";
import "./image.css";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <>
      <Link to="/first-project">
        <div id="backimage"></div>
      </Link>
    </>
  );
};
export default Image;
