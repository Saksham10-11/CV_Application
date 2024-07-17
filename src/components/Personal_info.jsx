import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function PersonalInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onSubmitForm = (e) => {};
  const handleChange = (e) => {};

  function isFormValid() {
    return true;
  }

  return (
    <div className="general-info-container">
      <div className="form-header">
        <img src="/Images/personal-info.png" alt="" />
        <h1>Personal Information</h1>
      </div>
      <div>
        <form onSubmit={onSubmitForm}>
          <div className="input-container">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              id="fullName"
              value={fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="fullName">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="fullName">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              id="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="fullName">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter city , locality"
              id="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div className="btn">
            <button disabled={!isFormValid()}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
