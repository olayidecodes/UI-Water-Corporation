import * as React from "react";
import styles from "./Home.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "../.././component/Navbar";
const Home = () => {
  // const propsData = {
  //   rectangle2: {
  //     variant: "outline-danger",
  //     children: "Button",
  //     size: "lg",
  //   },
  // };

  return (
    <div className={styles.homepage}>
      <Navbar />
      <div className={styles.main}>
        <h1>Your Surest and Cleanest Water Provider</h1>
        {/* <button>Contact Us</button> */}
      </div>
    </div>
  );
};
export default Home;
