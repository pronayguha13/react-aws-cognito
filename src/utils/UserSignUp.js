import UserPool from "../aws/UserPool";
import { CognitoUser } from "amazon-cognito-identity-js";

export const createAccount = (email, password, setIsUserCreated) => {
  UserPool.signUp(email, password, [], null, (err, data) => {
    if (err) console.log(`err>>`, err);
    console.log(`data>>`, data);
    if (data && data.userSub) {
      window.localStorage.setItem("username", data.user.username);
      setIsUserCreated(true);
    } else {
      alert("Oops!Sorry");
    }
  });
};

export const confirmUser = (username, verificationCode, setIsRegistered) => {
  let cognitoUser = new CognitoUser({
    Username: username,
    Pool: UserPool,
  });
  cognitoUser.confirmRegistration(verificationCode, true, (err, data) => {
    if (err) console.log(`err:>>`, err);
    if (data === "SUCCESS") {
      setIsRegistered(true);
    }
  });
};
