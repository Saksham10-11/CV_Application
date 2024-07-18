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
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [savedPersonal, setSavedPersonal] = useState(false);
  const [savedEducational, setSavedEducational] = useState(false);
  const [savedPractical, setSavedPractical] = useState(false);

  function isDataComplete() {
    if (
      savedPersonal === true &&
      savedEducational === true &&
      savedPractical === true
    ) {
      console.log("Here");
      return true;
    }
    return false;
  }

  function displayResume() {
    setDisplayData([personalForm, educationalForm, practicalForm]);
    setIsDisplaying(true);
  }

  return (
    <div className="container">
      <div className="header w-fill">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="info-container">
          <div className="scrollable-container">
            <PersonalInfo
              saveForm={setPersonalForm}
              setSavedPersonal={setSavedPersonal}
              isSaved={savedPersonal}
            ></PersonalInfo>
            <EducationalExp
              saveForm={setEducationalForm}
              setSavedEducational={setSavedEducational}
              isSaved={savedEducational}
            ></EducationalExp>
            <PracticalExp
              saveForm={setPracticalForm}
              setSavedPractical={setSavedPractical}
              isSaved={savedPractical}
            ></PracticalExp>
            <button
              className="main-button"
              onClick={displayResume}
              disabled={!isDataComplete()}
            >
              <img src="./Images/build.png" />
            </button>
          </div>
        </div>
        <div className="document-container">
          <Resume
            displayData={displayData}
            isDisplaying={isDisplaying}
          ></Resume>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
