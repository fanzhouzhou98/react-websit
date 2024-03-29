import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import PageHeader from '../Louty/Louty';

function Login() {
  return (
    <>
      <PageHeader></PageHeader>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" action="dashboard.html">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="btnBox">
            <input type="submit" className="btn" value="Login" />
          </div>
        </form>
        <p className="my-1">
          Don't have an account?<Link to="/register">Sign Up</Link>
        </p>
      </section>
    </>
  );
}

export default Login;
