import Axios from "axios";
import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [values, setValues] = useState({
    email: "",
    success: false,
    error: false,
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
  return (
    <div className="reset-form">
      <h1>Forgot Your Password?</h1>
      <p>
        Please enter you email address below to recieve a reset password link
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
          <button type="submit">Submit</button>
          <a href="">Go Back</a>
        </div>
      </form>
    </div>
  );
};

export default App;
