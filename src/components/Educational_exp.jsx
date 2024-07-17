import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function EducationalExp() {
  const [college, setCollege] = useState("");
  const [startCollegeYear, setStartCollegeYear] = useState(null);
  const [endCollegeYear, setEndCollegeYear] = useState(null);
  const [collegeBranch, setCollegeBranch] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");

  const onSubmitForm = (e) => {};
  const handleChange = (e) => {};

  function isFormValid() {
    return true;
  }

  return (
    <div className="general-info-container">
      <div className="form-header">
        <img src="/Images/education-info.png" alt="" />
        <h1>Educational Information</h1>
      </div>
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
              type="branch"
              name="text"
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
              name="address"
              placeholder="City , Locality"
              id="address"
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
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EducationalExp;
