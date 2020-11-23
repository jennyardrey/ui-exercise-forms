import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      email: e.target.value,
    }));
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("It has submitted");
  };
  return (
    <div className="reset-form">
      <h1>Forgot Your Password?</h1>
      <p>
        Please enter you email address below to recieve a reset password link
      </p>

      <form className="form" onSubmit={handleSubmit}>
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
