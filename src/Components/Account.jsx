import React, { useContext, useState, useEffect } from "react";
import "./Account.css";
import PizzaContext from "./Context";

export default function Account() {
  
  const { successfulRegFnc, fullName, setFullName } = useContext(PizzaContext);

  const [touchedName, setTouchedName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedNumber, setTouchedNumber] = useState(false);
  const [touchedPass, setTouchedPass] = useState(false);
  const [touchedGender, setTouchedGender] = useState(false);
  const [touchedTerms, setTouchedTerms] = useState(false);

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [gender, setGender] = useState("");

  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pass);

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    isValidPassword &&
    pass === confirmPass &&
    gender !== "" &&
    acceptedTerms;

  const isDisabledFormBtn = !isFormValid;

  const passwordsMatch = pass.trim() !== "" && confirmPass.trim() !== "" && pass === confirmPass;

  return (
    <div className="create-account-container">
      <div className="account-card">
        <h2 className="account-title">Create Account</h2>
        <p className="account-bio">
          Fill in your details below to get started.
        </p>

        <div className="form-grp">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={() => setTouchedName(true)}
          />

          {touchedName && fullName.trim() === "" && (
            <p className="err">Please Enter Full Name</p>
          )}
        </div>

        <div className="contact-details">
          <div className="email-grp">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouchedEmail(true)}
            />
            {touchedEmail && (email.trim() === "" || !email.includes("@")) && (
              <p className="err">Please Enter a valid Email</p>
            )}
          </div>

          <div className="phoneno-grp">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="(555) 000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={() => setTouchedNumber(true)}
            />

            {touchedNumber &&
              (phoneNumber.trim() === "" || phoneNumber.length < 10) && (
                <p className="err">Please Enter a valid Phone No</p>
              )}
          </div>
        </div>

        <div className="password-grp password-box">
          <div className="pass-first">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onBlur={() => setTouchedPass(true)}
            />
          </div>

          <div className="pass-sec">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              onBlur={() => setTouchedPass(true)}
            />
          </div>
        </div>

        {touchedPass && pass.length > 0 && !isValidPassword && (
          <p className="err pass-err">
            Password must be at least 8 characters long and include 1 uppercase
            letter, 1 lowercase letter, 1 number, and 1 special character.
          </p>
        )}

        {touchedPass && confirmPass.length > 0 && pass !== confirmPass && (
          <p className="err pass-err">Passwords do not match.</p>
        )}

        <div className="gender-grp">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            onBlur={() => setTouchedGender(true)}
          >
            <option value="">Select your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {touchedGender && gender === "" && (
            <p className="err">Please Select Gender</p>
          )}
        </div>

        <div className="terms-box">
          <div className="terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              onBlur={() => setTouchedTerms(true)}
            />
            <span>I accept the Terms of Service and Privacy Policy.</span>
          </div>

          {touchedTerms && !acceptedTerms && (
            <p className="err">Please tick the checkbox to continue.</p>
          )}
        </div>

        <button
          className="submit-btn"
          disabled={isDisabledFormBtn}
          onClick={() => successfulRegFnc()}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
