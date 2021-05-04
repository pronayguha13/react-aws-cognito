import React from "react";
import styles from "./styles.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpFormContainer}>
      <h1>Sign Up</h1>
      <form className={styles.signUpForm}>
        <div className={styles.inputSection}>
          <div className={styles.inputDiv}>
            <span>Email</span>
            <input type="mail" required />
          </div>
          <div className={styles.inputDiv}>
            <span>Password</span>
            <input type="password" required />
          </div>
          <div className={styles.inputDiv}>
            <span>Confirm Password</span>
            <input type="password" required />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success"
          onClick={console.log("Submit Button Clicked")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
