import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function EducationalExp(props) {
  const [college, setCollege] = useState("Vishwakarma Institute");
  const [startCollegeYear, setStartCollegeYear] = useState("2022-03-25");
  const [endCollegeYear, setEndCollegeYear] = useState("2022-03-25");
  const [collegeBranch, setCollegeBranch] = useState("Computer Engineering");
  const [collegeAddress, setCollegeAddress] = useState("Pune, India");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const info_educational = {
      college: college,
      startCollegeYear: new Date(startCollegeYear),
      endCollegeYear: new Date(endCollegeYear),
      collegeAddress: collegeAddress,
      collegeBranch: collegeBranch,
    };
    props.saveForm(info_educational);
    props.setSavedEducational(true);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "college":
        setCollege(value);
        break;
      case "startCollegeYear":
        setStartCollegeYear(value);
        break;
      case "endCollegeYear":
        setEndCollegeYear(value);
        break;
      case "collegeBranch":
        setCollegeBranch(value);
        break;
      case "collegeAddress":
        setCollegeAddress(value);
        break;
    }
  };

  function isFormValid() {
    if (
      college != "" &&
      collegeBranch != "" &&
      collegeAddress != "" &&
      startCollegeYear != null &&
      endCollegeYear != null
    ) {
      return true;
    }
    return false;
  }

  const editOption = () => {
    props.setSavedEducational(false);
  };

  return (
    <div className="general-info-container">
      <div className="form-header">
        <img src="/Images/education-info.png" alt="" />
        <h1>Educational Information</h1>
        {props.isSaved && (
          <button onClick={editOption}>
            <img src="./Images/edit.png" />
          </button>
        )}
      </div>
      {props.isSaved && (
        <div className="saved-container">
          <h1>{college}</h1>
          <p>{startCollegeYear + "  --  " + endCollegeYear}</p>
          <p>{collegeBranch}</p>
          <p>{collegeAddress}</p>
        </div>
      )}
      {!props.isSaved && (
        <div>
          <form onSubmit={onSubmitForm}>
            <div className="input-container">
              <label htmlFor="fullName">College</label>
              <input
                type="text"
                name="college"
                placeholder="Name of your college"
                id="college"
                value={college}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="fullName">Branch</label>
              <input
                type="text"
                name="branch"
                placeholder="Enter your branch"
                id="branch"
                value={collegeBranch}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="fullName">Address</label>
              <input
                type="text"
                name="collegeAddress"
                placeholder="City , Locality"
                id="collegeAddress"
                value={collegeAddress}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <div className="date-container">
                <div className="input-date-container">
                  <label htmlFor="fullName">Start Year</label>
                  <input
                    type="date"
                    name="startCollegeYear"
                    placeholder="Starting year"
                    id="startCollegeYear"
                    value={startCollegeYear}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-date-container">
                  <label htmlFor="fullName">Passing Year</label>
                  <input
                    type="date"
                    name="endCollegeYear"
                    placeholder="Passing year"
                    id="endCollegeYear"
                    value={endCollegeYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="btn">
              <button disabled={!isFormValid()}>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EducationalExp;
