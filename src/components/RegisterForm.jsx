import React from "react";
import { useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    navigate("/account-settings");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create your PopX account</h2>

        <div className="form-group">
          <label>
            Full Name<span>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Phone Number<span>*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Email Address<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Password<span>*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
          />
        </div>

        <p id="agency">
          Are you an Agency?<span>*</span>
        </p>
        <div className="radio-group">
          <input
            type="radio"
            name="isAgency"
            value="yes"
            checked={formData.isAgency === "yes"}
            onChange={handleChange}
          />
          <p>Yes</p>
          <input
            id="input2"
            type="radio"
            name="isAgency"
            value="no"
            checked={formData.isAgency === "no"}
            onChange={handleChange}
          />
          <p>No</p>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default RegisterForm;
