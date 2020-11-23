import Axios from "axios";
import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [values, setValues] = useState({
    email: "",
    success: false,
    error: false,
    instructions: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      email: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3005/customer/account/resetPassword", {
      email: values.email,
    })
      .then(function (res) {
        console.log(res);
        setValues((values) => ({
          success: true,
        }));
      })
      .catch(function (err) {
        console.log(err);
        setValues((values) => ({
          error: true,
        }));
      });
  };

  const revealDiv = (e) => {
    e.preventDefault();
    setValues((values) => ({
      instructions: true,
    }));
  };

  const hideDiv = (e) => {
    e.preventDefault();
    setValues((values) => ({
      instructions: false,
    }));
  };

  return (
    <div className="reset-form">
      <h1>Forgot Your Password?</h1>
      <p id="sub-head">
        Please enter you email address below to recieve a reset password link.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        {!values.error === true ? null : (
          <div className="error-message">
            Sorry, there is no account attached to that email address
          </div>
        )}
        {!values.success === true ? null : (
          <div className="success-message">
            Success, we have emailed your password reset link
          </div>
        )}
        <div className="form-contents">
          <label className="form-item">Email Address</label>
          <input
            className="form-item"
            id="email-input"
            name="email"
            placeholder="example@email.com"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className="buttons">
            <button type="submit">Reset password</button>
            <a href="">Go Back</a>
          </div>

          {!values.instructions === true ? (
            <a className="reveal-hide" onClick={revealDiv}>
              Are you having trouble resetting your password? &darr;
            </a>
          ) : (
            <a className="reveal-hide" onClick={hideDiv}>
              Hide instructions
            </a>
          )}
          {!values.instructions === true ? null : (
            <div className="reset-instructions">
              <p>
                We have had some customers who mistakenly believe they have a
                store account when in fact they are only signed up to receive
                our VIP Club newsletter
              </p>
              <p>
                If you receive our newsletter but have never made a purchase
                online this might apply to you, the best way to check this is to
                do the following:
              </p>
              <ol>
                <li>Go back to the register page</li>
                <li> Register with your email address</li>
                <p>If you do already have an account the form will tell you</p>
              </ol>
              <p>
                If the form tells you you already have an account and the
                password reset doesn't work please contact the Customer Service
                Team on 033 900 0094
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default App;
