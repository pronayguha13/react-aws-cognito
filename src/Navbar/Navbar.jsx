import React from "react";
import styles from "./styles.module.css";

const Navbar = ({ logOutHandler }) => {
  const username = window.localStorage.getItem("username");
  return (
    <div className={styles.NavBar}>
      <span>
        <img src="/assets/account.svg" alt="user-avatar" />
        <span>{username}</span>
      </span>
      <img
        src="/assets/logout.svg"
        alt="logout"
        onClick={() => logOutHandler()}
      />
    </div>
  );
};

export default Navbar;
