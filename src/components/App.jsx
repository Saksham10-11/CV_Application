import React from "react";
import EducationalExp from "./Educational_exp";
import PracticalExp from "./Practical_exp";
import PersonalInfo from "./Personal_info";
import Footer from "./Footer";
import Header from "./Header";
import Resume from "./Resume";
import "../style.css";

function App() {
  return (
    <>
      <div className="header h-fill w-fill">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="info-container">
          <div className="scrollable-container">
            <PersonalInfo></PersonalInfo>
            <EducationalExp></EducationalExp>
            <PracticalExp></PracticalExp>
          </div>
        </div>
        <div className="document-container">
          <Resume></Resume>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
