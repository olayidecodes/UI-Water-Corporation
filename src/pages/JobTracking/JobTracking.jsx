import * as React from "react";

import InputComponent from "../../../component/Input";
import styled from "styled-components";

import styles from "./JobTracking.module.css";
import ButtonComponent from "../../../component/Button";
import Layout from "../../../component/Layout";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const JobTracking = () => {
  return (
    <Layout>
      <Section>
        <h2 className={styles.Title}>Job Tracking Form</h2>
        <form className={styles.Form}>
          <div>
            <InputComponent label={"Full Name"} />
          </div>
          <div>
            <InputComponent label={"Application ID"} />
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
