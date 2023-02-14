import * as React from "react";
import styles from "./JobListings.module.css";
import Grid from "../../../component/Grid";
import JobCard from "../../../component/JobCard";
import Layout from "../../../component/Layout";
import { Box, Skeleton } from "@mui/material";

const JobListings = () => {
  return (
    <Layout>
      <div style={{ margin: "2em auto 4em", textAlign: "center" }}>
        <h2>Job Openings</h2>
      </div>
      <div className={styles.JobListings}>
        <Grid grid={4} gapY={2.5}>
          <JobLoadingSkeleton />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
          <JobCard
            title="Sales Representative"
            location="Ibadan"
            status="full-time"
          />
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
