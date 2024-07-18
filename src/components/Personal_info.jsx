import React, { useState } from "react";
import checkPhone from "../utils/checkPhone";
import checkEmail from "../utils/checkEmail";
import "../styles/GeneralInfo.css";

function PersonalInfo(props) {
  const [fullName, setFullName] = useState("Jhon Watkins");
  const [email, setEmail] = useState("JhonWat123@gmail.com");
  const [phone, setPhone] = useState("9823435734");
  const [address, setAddress] = useState("Pune ,India");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const info_personal = {
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
    };
    props.saveForm(info_personal);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };

  function isFormValid() {
    if (
      fullName != "" &&
      checkPhone(phone) &&
      checkEmail(email) &&
      address != ""
    ) {
      return true;
    }
    return false;
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
