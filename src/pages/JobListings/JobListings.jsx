import * as React from "react";
import styles from "./JobListings.module.css";
import Grid from "../.././component/Grid";
import JobCard from "../.././component/JobCard";
import Layout from "../.././component/Layout";
import { Box, Skeleton } from "@mui/material";
import axios from "axios";

const JobListings = () => {
  const [jobLists, setJobLists] = React.useState([]);

  React.useEffect(() => {
    async function getJobList() {
      let res = await axios.get("http://localhost:8080/joblisting");
      let { data } = await res.data;
      setJobLists(data);
    }
    getJobList();
  }, []);

  return (
    <Layout>
      <div style={{ margin: "2em auto 4em", textAlign: "center" }}>
        <h2>Job Openings</h2>
      </div>
      <div className={styles.JobListings}>
        <Grid grid={4} gapY={2.5}>
          {jobLists.length ? (
            jobLists.map((jobList) => (
              <JobCard
                title={jobList.jobTitle}
                location={jobList.jobLocation}
                status={jobList.jobType}
              />
            ))
          ) : (
            <span
              style={{
                textAlign: "center",
                width: "90vw",
              }}
            >
              No Open Position
            </span>
          )}
        </Grid>
      </div>
    </Layout>
  );
};
export default JobListings;

const JobLoadingSkeleton = () => {
  <Box sx={{ width: 300 }}>
    <Skeleton />
    <Skeleton animation="wave" />
    <Skeleton animation={false} />
  </Box>;
};
