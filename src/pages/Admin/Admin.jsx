import * as React from "react";
import "./Admin.css";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const Admin = () => {
  const propsData = {
    rectangle28: {
      size: "lg",
    },
    rectangle29: {
      size: "lg",
    },
    rectangle27: {
      active: true,
      children: "Button",
      disabled: false,
      size: "sm",
      variant: "outline-info",
    },
  };
  return (
    <div className="mac-book-air-4">
      <div className="rectangle-26">
        <span className="welcome-admin">Welcome Admin,</span>
        <span className="enter-your-details">Enter Your Details</span>
        <span className="email-id">Email ID</span>
        <FormControl
          className="rectangle-28-instance"
          {...propsData.rectangle28}
          type="text"
        />
        <span className="password">Password</span>
        <FormControl
          className="rectangle-29-instance"
          {...propsData.rectangle29}
          type="text"
        />
        <div className="flex-container">
          <Button
            className="rectangle-27-instance"
            {...propsData.rectangle27}
          />
          <div className="cat-absolute-container">
            <span className="login">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
