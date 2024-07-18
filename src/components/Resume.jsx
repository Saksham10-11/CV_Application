import React from "react";
import "../styles/Resume.css";

function Resume(props) {
  let personalInfo = null;
  let educationalInfo = null;
  let practicalInfo = null;
  if (props.displayData != null) {
    personalInfo = props.displayData[0];
    educationalInfo = props.displayData[1];
    practicalInfo = props.displayData[2];
  }

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short" };
    if (date == null) return "hello";
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="resume">
      {props.isDisplaying && (
        <div className="">
          <div className="resume-top">
            <h1>{personalInfo.fullName}</h1>
            <p>
              {personalInfo.email} | {personalInfo.phone} |{" "}
              {personalInfo.address}
            </p>
          </div>
          <div className="resume-mid">
            <h2>Education</h2>
            <div className="item">
              <p>
                <strong>
                  {educationalInfo.collegeBranch}, {educationalInfo.college}
                </strong>
              </p>
              <p>
                {formatDate(educationalInfo.startCollegeYear)} -{" "}
                {formatDate(educationalInfo.endCollegeYear)}
              </p>
              <p>{educationalInfo.collegeAddress}</p>
            </div>
          </div>
          <div className="resume-bottom">
            <h2>Professional Experience</h2>
            <div className="item">
              <p>
                <strong>
                  {practicalInfo.role}, {practicalInfo.company}
                </strong>
              </p>
              <p>
                {formatDate(practicalInfo.startYear)} -{" "}
                {formatDate(practicalInfo.endYear)}
              </p>
              <p>{practicalInfo.companyAddress}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
