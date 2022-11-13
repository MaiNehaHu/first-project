import React from "react";
import "./index.css";

import Home from "./Home";
import Nav from "./Compo/navBar/navBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import { VisionandMission } from "./Nav Components/AboutUs/VandM";
import { NavFooter } from "./Nav Components/FooterNav/footer";
import PrincipalDesk from "./Nav Components/AboutUs/princiDesk";
import Management from "./Nav Components/AboutUs/Management";

import Whymlritm from "./Nav Components/Admissions/Whymlritm";
import AdmissionProcedure from "./Nav Components/Admissions/AdmissionProcedure";
import Admission from "./Nav Components/Admissions/Admission";
import Coursesintake from "./Nav Components/Admissions/Courses";
import Brochure from "./Nav Components/Admissions/Brochure";
import Howtoapply from "./Nav Components/Admissions/How to apply";
import FeeStructure from "./Nav Components/Admissions/FeeStructure";
import Scholarship from "./Nav Components/Admissions/Scholarship";
import CuttofRanks from "./Nav Components/Admissions/CuttofRanks";


import CoursesOffering from "./Nav Components/Academics/CoursesOffering";
import Syllabus from "./Nav Components/Academics/Syllabus";
import AcademicCalendar from "./Nav Components/Academics/AcademicCalendar";


import ResearchObjectives from "./Nav Components/Research/ResearchObjectives";
import ResearchSupervisors from "./Nav Components/Research/ResearchSupervisors";
import Consultancy from "./Nav Components/Research/Consultancy";
import Patents from "./Nav Components/Research/Patents";
import FundingProjects from "./Nav Components/Research/Funding Projects";
import Publications from "./Nav Components/Research/Publications";


import Results from "./Nav Components/Examination Cell/Results";
import ExaminationProcedure from "./Nav Components/Examination Cell/Examination Procedure";
import EvaluationProcess from "./Nav Components/Examination Cell/EvaluationProcess";
import ResultAnalysis from "./Nav Components/Examination Cell/Result Analysis";
import DisciplineAtExamHalls from "./Nav Components/Examination Cell/Discipline";
import Notification from "./Nav Components/Examination Cell/Notification";
import Schedule from "./Nav Components/Examination Cell/Schedule";


import CampusPlacement2022 from "./Nav Components/Placement Cell/CampusPlacement2022-23";
import PlacementStatistics from "./Nav Components/Placement Cell/PlacementStatistics";


import CSE from "./Compo/Courses/CourseComps/CSE";
import IT from "./Compo/Courses/CourseComps/IT";
import ECE from "./Compo/Courses/CourseComps/ECE";
import MECH from "./Compo/Courses/CourseComps/MECH";
import MBA from "./Compo/Courses/CourseComps/MBA";
import CIVIL from "./Compo/Courses/CourseComps/CIVIL";
import EEE from "./Compo/Courses/CourseComps/EEE";
import AIML from "./Compo/Courses/CourseComps/AI&ML";
import CS from "./Compo/Courses/CourseComps/CS";
import CSIT from "./Compo/Courses/CourseComps/CS-IT";
import DS from "./Compo/Courses/CourseComps/DS";


import ReadMoreawards from "./Compo/Campus Life/Readmore/awards";

import Mediagallery from "./Compo/Facilities/Compo/mediagallery";
import NoRagging from "./Compo/Facilities/Compo/NoRagging";
import Hostel from "./Compo/Facilities/Compo/Hostel";
import Transport from "./Compo/Facilities/Compo/Transport";
import Library from "./Compo/Facilities/Compo/Library";


import Error from "./Compo/Error";


import StudentLogin from "./Compo/navBar/Logins/Student";
import FacultyLogin from "./Compo/navBar/Logins/Faculty";
import MailLogin from "./Compo/navBar/Logins/Mail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/StudentLogin"
          element={
            <>
              <Nav />
              <StudentLogin />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/FacultyLogin"
          element={
            <>
              <Nav />
              <FacultyLogin />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/MailLogin"
          element={
            <>
              <Nav />
              <MailLogin />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/visionandmission"
          element={
            <>
              <Nav />
              <VisionandMission />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/principaldesk"
          element={
            <>
              <Nav />
              <PrincipalDesk />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/management"
          element={
            <>
              <Nav />
              <Management />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/whymlritm"
          element={
            <>
              <Nav />
              <Whymlritm />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/admissionprocedure"
          element={
            <>
              <Nav />
              <AdmissionProcedure />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/admissions"
          element={
            <>
              <Nav />
              <Admission />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/coursesintake"
          element={
            <>
              <Nav />
              <Coursesintake />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/brochure"
          element={
            <>
              <Nav />
              <Brochure />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/howtoapply"
          element={
            <>
              <Nav />
              <Howtoapply />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/feestructure"
          element={
            <>
              <Nav />
              <FeeStructure />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/scholarships"
          element={
            <>
              <Nav />
              <Scholarship />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/cutoffranks"
          element={
            <>
              <Nav />
              <CuttofRanks />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/coursesoffered"
          element={
            <>
              <Nav />
              <CoursesOffering />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/syllabus"
          element={
            <>
              <Nav />
              <Syllabus />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/AcademicCalendar"
          element={
            <>
              <Nav />
              <AcademicCalendar />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/ResearchObjectives"
          element={
            <>
              <Nav />
              <ResearchObjectives />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/ResearchSupervisors"
          element={
            <>
              <Nav />
              <ResearchSupervisors />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Consultancy"
          element={
            <>
              <Nav />
              <Consultancy />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Patents"
          element={
            <>
              <Nav />
              <Patents />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/FundingProjects"
          element={
            <>
              <Nav />
              <FundingProjects />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Publications"
          element={
            <>
              <Nav />
              <Publications />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Results"
          element={
            <>
              <Nav />
              <Results />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/ExaminationProcedure"
          element={
            <>
              <Nav />
              <ExaminationProcedure />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/EvalutionProcess"
          element={
            <>
              <Nav />
              <EvaluationProcess />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/ResultAnalysis"
          element={
            <>
              <Nav />
              <ResultAnalysis />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/DisciplineAtExamHalls"
          element={
            <>
              <Nav />
              <DisciplineAtExamHalls />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Circulars"
          element={
            <>
              <Nav />
              <Notification />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Schedules"
          element={
            <>
              <Nav />
              <Schedule />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/SelectedStudents(2022-23)"
          element={
            <>
              <Nav />
              <CampusPlacement2022 />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/PlacementStatistics"
          element={
            <>
              <Nav />
              <PlacementStatistics />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/CSE" //1
          element={
            <>
              <Nav />
              <CSE />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/IT" //2
          element={
            <>
              <Nav />
              <IT />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/ECE" //3
          element={
            <>
              <Nav />
              <ECE />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/EEE" //4
          element={
            <>
              <Nav />
              <EEE />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/CIVIL" //5
          element={
            <>
              <Nav />
              <CIVIL />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/MECH" //6
          element={
            <>
              <Nav />
              <MECH />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/AI&ML" //7
          element={
            <>
              <Nav />
              <AIML />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/CS" //9
          element={
            <>
              <Nav />
              <CS />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/CS-IT" //10
          element={
            <>
              <Nav />
              <CSIT />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/DS" //8
          element={
            <>
              <Nav />
              <DS />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Courses/MBA" //11
          element={
            <>
              <Nav />
              <MBA />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/CampusLife/Awards&Recognitions"
          element={
            <>
              <Nav />
              <ReadMoreawards />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/MediaGallery"
          element={
            <>
              <Nav />
              <Mediagallery />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/RaggingFreeCampus"
          element={
            <>
              <Nav />
              <NoRagging />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Hostel"
          element={
            <>
              <Nav />
              <Hostel />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Transport"
          element={
            <>
              <Nav />
              <Transport />
              <NavFooter />
            </>
          }
        />
        <Route
          path="/Library"
          element={
            <>
              <Nav />
              <Library />
              <NavFooter />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Error />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
