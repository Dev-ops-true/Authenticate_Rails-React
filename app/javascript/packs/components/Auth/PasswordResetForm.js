import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PasswordResetForm.css";

export default function PasswordResetForm(props) {
  const [token, setToken] = useState("Not set");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [checkPasswordConfirmationStyle, setCheckPasswordConfirmationStyle] =
    useState("no-error");

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const passwordConfirmationChangeHandler = (event) => {
    setPasswordConfirmation(event.target.value);
    setCheckPasswordConfirmationStyle("no-error");
  };

  const tokenForAuth = () => {
    const urlParams = window.location.pathname;
    const requiredParam = urlParams.slice(15);
    setToken(requiredParam);
  };

  const submitPasswordReset = (event) => {
    if (password == passwordConfirmation) {
      axios
        .patch(
          "http://localhost:3000/password/reset/edit",
          {
            password: password,
            password_confirmation: passwordConfirmation,
            token: token,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
          props.handleSuccessfulAuth(response.data);
          props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
      event.preventDefault();
    } else {
      event.preventDefault();
      setCheckPasswordConfirmationStyle("error");
      setPasswordConfirmation("");
      console.log("Your passwords do not match");
    }
  };

  useEffect(() => tokenForAuth(), []);
  return (
    <div>
      <form onSubmit={submitPasswordReset}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
          required
        />

        <input
          className={checkPasswordConfirmationStyle}
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={passwordConfirmation}
          onChange={passwordConfirmationChangeHandler}
        />
        <button className='submit-button' type="submit">Reset my Password</button>
      </form>
    </div>
  );
}
