import React from "react";
import "./Style.css";
import CourseData from "./CourseData";
import CourseDisplayAlgo from "./CourseDisplayAlgo";

export const Courses = () => {
  return (
    <React.Fragment>
      <div className="Component">
        <h1 id="headingOfCompo">Our Courses</h1>
        <div className="scrollerBox snaps-inline">
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={0} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={1} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={2} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={3} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={4} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={5} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={6} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={7} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={8} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={9} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={10} />
            </a>
          </div>
          <div className="elem">
            <a href="/">
              <CourseDisplayAlgo data={CourseData} index={11} />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
