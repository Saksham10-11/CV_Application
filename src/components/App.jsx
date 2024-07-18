import React, { useState } from "react";
import EducationalExp from "./Educational_exp";
import PracticalExp from "./Practical_exp";
import PersonalInfo from "./Personal_info";
import Footer from "./Footer";
import Header from "./Header";
import Resume from "./Resume";
import "../style.css";

function App() {
  const [personalForm, setPersonalForm] = useState(null);
  const [educationalForm, setEducationalForm] = useState(null);
  const [practicalForm, setPracticalForm] = useState(null);
  const [displayData, setDisplayData] = useState(null);

  function isDataComplete() {
    if (
      personalForm != null &&
      educationalForm != null &&
      practicalForm != null
    ) {
      return true;
    }
    return false;
  }

  function displayResume() {
    setDisplayData([personalForm, educationalForm, practicalForm]);
  }

  return (
    <div className="container">
      <div className="header w-fill">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="info-container">
          <div className="scrollable-container">
            <PersonalInfo saveForm={setPersonalForm}></PersonalInfo>
            <EducationalExp saveForm={setEducationalForm}></EducationalExp>
            <PracticalExp saveForm={setPracticalForm}></PracticalExp>
            <button
              className="main-button"
              onClick={displayResume}
              disabled={isDataComplete()}
            >
              <img src="./Images/build.png" />
            </button>
          </div>
        </div>
        <div className="document-container">
          <Resume displayData={displayData}></Resume>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
