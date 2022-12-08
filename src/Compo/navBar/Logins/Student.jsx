import React from "react";
import './Design.css'
import "../../../Nav Components/AboutUs/1Style.css";


const StudentLogin = () => {
  return (
    <>
      <div className="bodyy log" >
        <h4 className="heading">Login</h4>
        <div className="Contentblock">
          <p className="lines">Click on the button below to login</p>
          <button><a href="https://mlritmexams.com/BeesERP/Login.aspx" target="blank">Student Login</a></button>
          <button><a href="https://mlritmexams.com/BeesERP/Login.aspx" target="blank">Student ERP Login</a></button>
          <button><a href="https://mlritmexams.com/BeesERP/Login.aspx" target="blank">LMS Student Login</a></button>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
