import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../global/LoginContext";
import styles from "./style.module.css";

const SignIn = () => {
  const history = useHistory();
  const { isLoggedIn, loginHandler } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) history.push("/");
  }, [isLoggedIn]);

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
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Inside the submitHandler method");
    loginHandler(email, password);
  };

  return (
    <div className={styles.signInFormContainer}>
      <h3>Sign in</h3>
      <form className={styles.signUpForm}>
        <div className={styles.inputSection}>
          <div className={styles.inputDiv}>
            <input
              type="mail"
              value={email}
              name="email"
              required
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter registered email id"
            />
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              value={password}
              name="password"
              required
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success"
          onClick={(e) => submitHandler(e)}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
