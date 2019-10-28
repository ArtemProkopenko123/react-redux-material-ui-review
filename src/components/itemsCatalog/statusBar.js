import React from "react";
import { Grid , Tabs, Tab } from "@material-ui/core";

const StatusBar = () => (
  <>
    <Grid sx={10}>
      <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
      </Tabs>
    </Grid>
  </>
);

export default StatusBar;