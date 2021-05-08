import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createAccount, confirmUser } from "../utils/UserSignUp";
import styles from "./styles.module.css";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPwd, setRetypedPwd] = useState("");
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    if (isRegistered) {
      alert("You are registered");
      history.push("/signin");
    }
  }, [isRegistered, history]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      case "verificationCode": {
        setVerificationCode(value);
        break;
      }
      default: {
        setRetypedPwd(value);
      }
    }
  };

  const createAccountHandler = (e) => {
    e.preventDefault();
    createAccount(email, password, setIsUserCreated);
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    confirmUser(email, verificationCode, setIsRegistered);
  };

  return (
    <div className={styles.signUpFormContainer}>
      <h1>Sign Up</h1>
      <form className={styles.signUpForm}>
        <div className={styles.inputSection}>
          <div className={styles.inputDiv}>
            <input
              type="mail"
              value={email}
              name="email"
              required
              placeholder="Enter Email id"
              onChange={(e) => onChangeHandler(e)}
              readOnly={isUserCreated ? true : false}
            />
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              value={password}
              name="password"
              required
              placeholder="Enter Password"
              onChange={(e) => onChangeHandler(e)}
              readOnly={isUserCreated ? true : false}
            />
          </div>
          {!isUserCreated ? (
            <div className={styles.inputDiv}>
              <input
                type="password"
                value={retypedPwd}
                name="retypedPwd"
                placeholder="Confirm Password"
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          ) : (
            <div className={styles.inputDiv}>
              <input
                type="text"
                name="verificationCode"
                value={verificationCode}
                placeholder="Enter Verification Code"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          )}
        </div>
        {!isUserCreated ? (
          <button
            type="submit"
            className="btn btn-lg btn-primary"
            onClick={(e) => createAccountHandler(e)}
          >
            Create Account
          </button>
        ) : (
          <button
            className="btn btn-lg btn-success"
            onClick={(e) => signUpHandler(e)}
          >
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
