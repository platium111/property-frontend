import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import {PoolDataAWS as UserPool} from "../../config";

export default ({email: initialEmail, password: initialPassword}) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },

      onFailure: err => {
        console.error("onFailure:", err);
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
  };

  console.log(email);
  console.log(password)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={email || initialEmail} onChange={event => setEmail(event.target.value)} />

        <input
          value={password || initialPassword}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};