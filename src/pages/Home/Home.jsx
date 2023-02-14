import * as React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Home = () => {
  // const propsData = {
  //   rectangle2: {
  //     variant: "outline-danger",
  //     children: "Button",
  //     size: "lg",
  //   },
  // };
  return (
    <div className="homepage">
      <div className="header">
        <h1>UI Water</h1>
        <div className="menu">
          <Link to="joblistings" style={{textDecoration: "none"}}>
            <span>Job postings</span>
          </Link>
          
          <Link to="apply" style={{textDecoration: "none"}}>
            <span>Apply for a Job</span>
          </Link>

          <Link to="jobtracking" style={{textDecoration: "none"}}>
            <span>Track your application</span>
          </Link>

          <Link to="admin" style={{textDecoration: "none"}}>
            <span>Admin Login</span>
          </Link>
        </div>
      </div>
      <div className="main">
        <h1>Your Surest and Cleanest Water Provider</h1>
        <button>Contact Us</button>
      </div>
    </div>
  );
};
export default Home;
