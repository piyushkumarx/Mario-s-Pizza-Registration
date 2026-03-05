import React, { useContext, useState } from "react";
import "./Account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import PizzaContext from "./Context";

export default function Account() {
  const { successfulRegFnc, fullName, setFullName } = useContext(PizzaContext);

  const [nameTouched, setNameTouched] = useState(false);
  const [mailTouched, setMailTouched] = useState(false);
  const [numTouched, setNumTouched] = useState(false);
  const [passTouched, setPassTouched] = useState(false);
  const [genTouched, setGenTouched] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);

  const [userMail, setUserMail] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPass, setConfirmPass] = useState("");
  const [userGender, setUserGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [agree, setAgree] = useState(false);

  const isStrong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

  const handleSubmit = () => {
    if (
      fullName.trim() !== "" &&
      userMail.includes("@") &&
      phoneVal.length >= 10 &&
      isStrong &&
      password === confirmPass &&
      userGender !== "" &&
      agree
    ) {
      successfulRegFnc();
    }
  };

  const canSubmit =
    fullName.trim() !== "" &&
    userMail.includes("@") &&
    phoneVal.length >= 10 &&
    isStrong &&
    password === confirmPass &&
    userGender !== "" &&
    agree;

  return (
    <div className="create-account-container">
      <div className="account-card">
        <div className="showpass-container">
          <h2 className="account-title">Create Account</h2>
          <div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="eye-btn"
            >
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash}  className="eye-icon"/> : <FontAwesomeIcon icon={faEye} className="eye-icon" />} 
            </button>
          </div>
        </div>

        <p className="account-bio">Enter your details below to get started.</p>

        <div className="form-grp">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Jakey Shroff"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={() => setNameTouched(true)}
          />
          {nameTouched && !fullName.trim() && (
            <p className="err">Name is required</p>
          )}
        </div>

        <div className="contact-details">
          <div className="email-grp">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
              onBlur={() => setMailTouched(true)}
            />

            {mailTouched && (!userMail.includes("@") || userMail === "") && (
              <p className="err">Please enter a valid email</p>
            )}
          </div>

          <div className="phoneno-grp">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="(9625)290480"
              value={phoneVal}
              onChange={(e) => setPhoneVal(e.target.value)}
              onBlur={() => setNumTouched(true)}
            />
            {numTouched && phoneVal.length < 10 && (
              <p className="err">Enter a 10-digit number</p>
            )}
          </div>
        </div>

        <div className="password-grp password-box">
          <div className="pass-first">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPassTouched(true)}
            />
          </div>

          <div className="pass-sec">
            <label>Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              onBlur={() => setPassTouched(true)}
            />
          </div>
        </div>

        {passTouched && password && !isStrong && (
          <p className="err pass-err">
            Password must be 8+ characters with uppercase, number, and symbol
          </p>
        )}

        {passTouched && confirmPass && password !== confirmPass && (
          <p className="err pass-err">Passwords do not match</p>
        )}

        <div className="gender-grp">
          <label>Gender</label>
          <select
            value={userGender}
            onChange={(e) => setUserGender(e.target.value)}
            onBlur={() => setGenTouched(true)}
          >
            <option value="">Select...</option>

            <option value="Male">Male</option>

            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {genTouched && !userGender && (
            <p className="err">Please select your gender</p>
          )}
        </div>

        <div className="terms-box">
          <div className="terms">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              onBlur={() => setTermsTouched(true)}
            />
            <span>I accept the Terms and Privacy Policy.</span>
          </div>
          {termsTouched && !agree && (
            <p className="err">You must agree to continue.</p>
          )}
        </div>

        <button
          className="submit-btn"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
