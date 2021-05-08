import React, { createContext, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../aws/UserPool";

export const LoginContext = createContext();

export const Login = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (Username, Password) => {
    const user = new CognitoUser({
      Username,
      Pool,
    });
    const authDetails = new AuthenticationDetails({
      Username,
      Password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        window.localStorage.setItem("username", Username);
        setIsLoggedIn(true);
      },

      onFailure: (err) => {
        console.log(
          "🚀 ~ file: UserSignIn.js ~ line 24 ~ loginHandler ~ err",
          err
        );
        alert(`${err.message}`);
      },

      newPasswordRequired: (data) => {
        console.log(
          "🚀 ~ file: UserSignIn.js ~ line 31 ~ loginHandler ~ data",
          data
        );
      },
    });
  };

  const getSession = () => {
    const currUser = Pool.getCurrentUser();
    if (currUser) {
      currUser.getSession((err, session) => {
        if (err) setIsLoggedIn(false);
        else {
          setIsLoggedIn(true);
        }
      });
    }
  };

  const logOutHandler = () => {
    const currUser = Pool.getCurrentUser();
    if (currUser) {
      currUser.signOut();
      window.localStorage.clear();
      setIsLoggedIn(false);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        loginHandler,
        getSession,
        logOutHandler,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
