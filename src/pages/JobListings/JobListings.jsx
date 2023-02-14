import * as React from "react";
import "./JobListings.css";
import next1 from "../../assets/next1.png";
import briefcase11 from "../../assets/briefcase11.png";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
const JobListings = () => {
  const propsData = {
    rectangle22: {
      variant: "outline-danger",
      size: "lg",
      children: "Search",
    },
    rectangle23: {
      text: "light",
      bg: "dark",
      children: "copycat",
    },
    rectangle24: {
      bg: "dark",
      children: "copycat",
    },
    rectangle25: {
      variant: "outline-secondary",
      disabled: false,
      children: "Button",
    },
  };
  return (
    <div className="mac-book-air-3">
      <div className="rectangle-20">
        <span className="ui-water-corporation">UI WATER CORPORATION</span>
        <hr className="line-2" />
        <span className="job-openings">Job Openings</span>
        {/* <div className="flex-container">
          <input className="rectangle-21" type="text" placeholder="Search" />
          <div className="flex-container-1">

            <Button
              className="rectangle-22-instance"
              {...propsData.rectangle22}
            />
          </div>
        </div> */}
        <span className="sales-representative">Sales Representative</span>
        <span className="ibadan">Ibadan</span>
        <div className="flex-container-2">
          <img className="briefcase-1-1" src={briefcase11} />
          <span className="full-time">Full-time</span>
        </div>
        <div className="flex-container-3">
          {/* <Badge className="rectangle-23-instance" {...propsData.rectangle23} /> */}
          <div className="cat-absolute-container-1">
            <span className="apply">Apply</span>
          </div>
        </div>
        <span className="clerk-officer">Clerk Officer</span>
        <span className="ibadan-1">Ibadan</span>
        <div className="flex-container-4">
          <img className="briefcase-1-2" src={briefcase11} />
          <span className="full-time-1">Full-time</span>
        </div>
        <div className="flex-container-5">
          {/* <Badge className="rectangle-24-instance" {...propsData.rectangle24} /> */}
          <div className="cat-absolute-container-2">
            <span className="apply">Apply</span>
          </div>
        </div>

        <span className="clerk-officer">Courier</span>
        <span className="ibadan-1">Ibadan</span>
        <div className="flex-container-4">
          <img className="briefcase-1-2" src={briefcase11} />
          <span className="full-time-1">Full-time</span>
        </div>
        <div className="flex-container-5">
          {/* <Badge className="rectangle-24-instance" {...propsData.rectangle24} /> */}
          <div className="cat-absolute-container-2">
            <span className="apply">Apply</span>
          </div>
        </div>

        <span className="clerk-officer">Quality Control</span>
        <span className="ibadan-1">Ibadan</span>
        <div className="flex-container-4">
          <img className="briefcase-1-2" src={briefcase11} />
          <span className="full-time-1">Full-time</span>
        </div>
        <div className="flex-container-5">
          {/* <Badge className="rectangle-24-instance" {...propsData.rectangle24} /> */}
          <div className="cat-absolute-container-2">
            <span className="apply">Apply</span>
          </div>
        </div>
        <div className="flex-container-6">
          {/* <Button
            className="rectangle-25-instance"
            {...propsData.rectangle25}
          /> */}
          <div className="cat-absolute-container-3">
            <span className="next">NEXT</span>
            <img className="next-1" src={next1} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobListings;
