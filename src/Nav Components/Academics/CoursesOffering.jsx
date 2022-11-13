import React from "react";
import "../AboutUs/1Style.css";
import '../Admissions/2Style.css'

const CoursesOffering = () => {
  return (
    <>
      <div className="bodyy courses">
        <h4 className="heading">UG / PG Programmes Intake</h4>
        <div className="displayblock">
          <div id="ugtable" className="Navtable">
            <table>
              <thead>
                <th>Program</th>
                <th>Specialization</th>
                <th>Students Intake</th>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={11}>UG Courses</td>
                  <td>Computer Science and Engineering(CSE)</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>
                    Artificial Intelligence and Machine Learning(AI and ML)
                  </td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Cyber Security</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>Data Science</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Computer Science and Information Technlolgy</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>Information Technology(IT)</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Electronics and Communication Engineering(ECE)</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Electrical and Electronics Engineering(EEE)</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering(ME)</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td colSpan={1}>Total</td>
                  <td>1080</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="pgtable" className="Navtable">
            <table>
              <thead>
                <th>Program</th>
                <th>Specialization</th>
                <th>Students Intake</th>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={6}>PG Courses</td>
                  <td>M.Tech CAD/CAM</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>M.Tech Computer Science Engineering</td>

                  <td>18</td>
                </tr>
                <tr>
                  <td>M.Tech Embedded Systems</td>

                  <td>18</td>
                </tr>
                <tr>
                  <td>M.Tech Structures</td>

                  <td>18</td>
                </tr>
                <tr>
                  <td>Master of Businees Administration</td>

                  <td>120</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>192</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesOffering;
