import * as React from "react";

import InputComponent from "../.././component/Input";
import styled from "styled-components";

import styles from "./JobTracking.module.css";
import ButtonComponent from "../.././component/Button";
import Layout from "../.././component/Layout";
import axios from "axios";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const JobTracking = () => {
  const [formEntry, setFormEntry] = React.useState({
    applicationId: "",
  });

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormEntry((formEntry) => ({
      ...formEntry,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formEntry);

    // FIX THE API ENDPOINT HERE
    let res = await axios.post("http://0.0.0.0:8080/trackapplication", formEntry);
    let { status } = res.data;

    if (status.toLowerCase() === "accepted") {
      return Swal.fire("Whao", "Your application is accepted", "success");
    }

    if (status.toLowerCase() === "pending") {
      return Swal.fire("Hello", "Your submission is pending", "warning");
    }

    if (status.toLowerCase() === "rejected") {
      return Swal.fire("Oops", "Your application is rejected", "error");
    }
  };
  return (
    <Layout>
      <Section>
        <h2 className={styles.Title}>Job Tracking Form</h2>
        <form className={styles.Form} onSubmit={submitHandler}>
          <div>
            <InputComponent
              value={formEntry.applicationId}
              changeHandler={inputHandler}
              name="applicationId"
              label={"Application ID"}
            />
          </div>
          <ButtonComponent
            label="Submit"
            compact={true}
            bg="#039341"
            color={"#ffffff"}
          />
        </form>
      </Section>
    </Layout>
  );
};
export default JobTracking;
