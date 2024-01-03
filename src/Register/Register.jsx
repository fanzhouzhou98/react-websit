import "./Register.css";
import React from "react";
import PageHeader from '../Louty/Louty';

function Register() {
  return (
    <div>
      <PageHeader></PageHeader>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form1">
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
            />
          </div>
          <div className="btnBox">
            <input type="submit" className="btn" value="Register" />
          </div>
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </div>
  );
}

export default Register;