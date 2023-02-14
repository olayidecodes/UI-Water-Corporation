import * as React from "react";
import "./JobTracking.css";
import rectangle27 from "../../assets/rectangle27.svg";
import Button from "react-bootstrap/Button";
const JobTracking = () => {
  const propsData = {
    rectangle29: {
      children: "Button",
      size: "lg",
      variant: "outline-danger",
    },
  };
  return (
    <div className="mac-book-air-4">
      <div className="rectangle-26">
        <span className="job-tracking-form">JOB TRACKING FORM</span>
        <span className="full-name">Full Name</span>
        <img className="rectangle-27" src={rectangle27} />
        <span className="application-id">Application ID</span>
        <img className="rectangle-28" src={rectangle27} />
        <div className="flex-container">
          <Button
            className="rectangle-29-instance"
            {...propsData.rectangle29}
          />
          <div className="cat-absolute-container">
            <span className="submit">Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobTracking;
