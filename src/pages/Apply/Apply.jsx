import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "../../../component/Input";

import styles from "./Apply.module.css";
import SelectComponent from "../../../component/Select";
import ButtonComponent from "../../../component/Button";
import Upload from "../../../component/Upload";
import Grid from "../../../component/Grid";
import Layout from "../../../component/Layout";
import axios from "axios";

const H3 = styled.h3`
  font-size: 1em;
  font-weight: 400;
  marginbottom: 0.5em;
`;

export default function Apply() {
  const [formEntry, setFormEntry] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    state: "",
    city: "",
    birthdate: "",
    birthyear: "",
    birthmonth: "",
    email: "",
    phonenumber: "",
    education: "",
    degreee: "",
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

    // FIX THE API ENDPOINT HERE
    let res = await axios.post("/api", formEntry);
    let { applicationId } = res.data;

    alert(applicationId);
  };

  return (
    <Layout>
      <div style={{ margin: "2em auto 4em", textAlign: "center" }}>
        <h2>Employment Application</h2>
        <span>Personal Informartion</span>
      </div>
      <div className={styles.Apply}>
        <form className={styles.ApplyForm} onSubmit={submitHandler}>
          <Grid grid={3}>
            <InputComponent
              value={formEntry.firstname}
              changeHandler={inputHandler}
              name="firstname"
              label="First Name"
            />
            <InputComponent
              value={formEntry.middlename}
              changeHandler={inputHandler}
              name="middlename"
              label="Middle Name"
            />
            <InputComponent
              value={formEntry.lastname}
              changeHandler={inputHandler}
              name="lastname"
              label="Last Name"
            />
          </Grid>

          <Grid grid={1}>
            <InputComponent
              value={formEntry.address}
              changeHandler={inputHandler}
              name="address"
              label="Address"
            />
          </Grid>

          <Grid grid={2}>
            <InputComponent
              value={formEntry.state}
              changeHandler={inputHandler}
              name="state"
              label="State/Province"
            />
            <InputComponent
              value={formEntry.city}
              changeHandler={inputHandler}
              name="city"
              label="City"
            />
          </Grid>

          <div>
            <H3>Birth Date</H3>
            <Grid tOff grid={3}>
              <SelectComponent
                value={formEntry.birthmonth}
                changeHandler={inputHandler}
                name="birthmonth"
                label="Month"
                entries={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]}
              />
              <SelectComponent
                value={formEntry.birthdate}
                changeHandler={inputHandler}
                name="birthdate"
                label="Date"
                entries={Array.from({ length: 30 }, (_, i) => i + 1)}
              />
              <SelectComponent
                value={formEntry.birthyear}
                changeHandler={inputHandler}
                name="birthyear"
                label="Year"
                entries={Array.from({ length: 45 }, (_, i) => i + 1960)}
              />
            </Grid>
          </div>

          <Grid grid={2}>
            <InputComponent
              value={formEntry.email}
              changeHandler={inputHandler}
              name="email"
              label="Email"
            />
            <InputComponent
              value={formEntry.phonenumber}
              changeHandler={inputHandler}
              name="phonenumber"
              label="Phone Number"
            />
          </Grid>

          <div>
            <H3>Education</H3>
            <Grid tOff grid={2}>
              <SelectComponent
                value={formEntry.education}
                changeHandler={inputHandler}
                name="education"
                label="Highest Education Achieved"
                entries={["College", "Secondary School"]}
              />
              <SelectComponent
                value={formEntry.degreee}
                changeHandler={inputHandler}
                name="degreee"
                label="Degree"
                entries={["Bsc", "Msc", "PhD"]}
              />
            </Grid>
          </div>

          <div>
            <H3 style={{ marginBottom: ".5em" }}>Cover Letter & Resume</H3>
            <Grid tOff grid={2}>
              <Upload label={"Cover letter"} />
              <Upload label={"Resume"} />
            </Grid>
          </div>

          <ButtonComponent
            label="Submit your application"
            bg="#039341"
            color={"#ffffff"}
          />
        </form>
      </div>
    </Layout>
  );
}
