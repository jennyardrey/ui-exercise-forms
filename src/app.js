import React from "react";
import "./app.css";

const App = () => {
  return (
    <div className="reset-form">
      <h1>Forgot Your Password?</h1>
      <p>
        Please enter you email address below to recieve a reset password link
      </p>

      <form className="form" onSubmit="">
        <label className="form-item">Email Address</label>
        <input
          className="form-item"
          id="email-input"
          name="email"
          placeholder="example@email.com"
          type="email"
          value=""
          onChange=""
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
