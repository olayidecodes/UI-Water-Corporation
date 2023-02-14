import * as React from "react";

import InputComponent from "../../../component/Input";
import styled from "styled-components";

import styles from "../JobTracking/JobTracking.module.css";
import ButtonComponent from "../../../component/Button";
import Layout from "../../../component/Layout";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Admin = () => {
  return (
    <Layout>
      <Section>
        <div>
          <h2 className={styles.Title}>Welcome Admin</h2>
          <span className={styles.Info}>Enter your details</span>
        </div>
        <form className={styles.Form}>
          <div>
            <InputComponent label={"Email ID"} />
          </div>
          <div>
            <InputComponent label={"Password"} />
          </div>
          <ButtonComponent
            label="Login"
            compact={true}
            bg="#039341"
            color={"#ffffff"}
          />
        </form>
      </Section>
    </Layout>
  );
};

export default Admin;
