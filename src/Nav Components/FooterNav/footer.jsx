import React from "react";
import { Link } from "react-router-dom";
import "./footerstyle.css";
import { Followus } from "../../Compo/Footer/Followus";

export const NavFooter = () => {
  return (
    <>
      <div id="navfooter">
        <div className="FooterBox">
          <div className="Logins OneBox">
            <h3 className="FooterHeading">MLRITM Login</h3>
            <Link to="/">Student Login / ERP Login (autonomous)</Link>
            <Link to="/">Faculty Login / ERP Login (autonomous)</Link>
            <Link to="/">LMS Login</Link>
            <Link to="/">Online Fee Payment</Link>
            <Link to="/">MLRITM Mail login</Link>
            <Link to="/">AICTE Student Feedback</Link>
            <Link to="/">AICTE Faculty Feedback</Link>
          </div>
          <div className="QuickLinks OneBox">
            <h3 className="FooterHeading">Quick links</h3>
            <Link to="/">Examination Updates</Link>
            <Link to="/">Placement Updates</Link>
            <Link to="/admissions/scholarships">Scholarship Updates</Link>
            <Link to="/">Academic Calendar</Link>
          </div>

          <div className="Campuslife OneBox">
            <h3 className="FooterHeading">Campus Life</h3>
            <Link to="/">Join MLRITM faculty</Link>
            <Link to="/">Apply Student Certificates</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Activities</Link>
            <Link to="/">Mandatory disclosure</Link>
            <Link to="/">NIRF</Link>
            <Link to="/">Downloads</Link>
            <Link to="/">Rules and Regulations</Link>
          </div>
          <div className="Academics OneBox">
            <h3 className="FooterHeading">Academics</h3>
            <Link to="/">UG Programmes</Link>
            <Link to="/">PG Programmes</Link>
            <Link to="/">Governing Body</Link>
            <Link to="/">Academic Council</Link>
            <Link to="/">Regulation and Syllabus</Link>
            <Link to="/">RTI-ACT</Link>
            <Link to="/">Academic Calendar</Link>
            <Link to="/">Professional Societies</Link>
            <Link to="/">Grievance Cell</Link>
          </div>
          <div className="Contactus OneBox">
            <h3 className="FooterHeading">Contact us</h3>
            <p>
              Marri Laxman Reddy Institute of Technology and Management
              <br />
              Dundigal, Hyderabad - 500043,
              <br />
              Telangana, India.
            </p>
            <a href="mailto:info@mlritm.ac.in">info@mlritm.ac.in</a>

            <p>Ph :040 - 29556182</p>
          </div>
          <div>
            <Followus />
          </div>
          <p
            className="lines"
            style={{ display: "flex", justifyContent: "start", color: "white" }}
          >
            Frontend Developed by Neha Kumari(207Y1A0423)
          </p>
        </div>
      </div>
    </>
  );
};
