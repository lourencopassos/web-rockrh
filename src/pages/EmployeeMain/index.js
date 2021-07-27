import React from "react";
import PortalLayout from "../../layouts/portal.index";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Welcome from "../../components/Welcome/Welcome";
import MonthSale from "../../components/MonthSale/MonthSale";
import MonthGoals from "../../components/MonthGoals/MonthGoals";
import LastFeedbacks from "../../components/LastFeedbacks/LastFeedbacks";
import Evaluations from "../../components/Evaluations/Evaluations";

export default function EmployeeDashboard() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
  }));

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <PortalLayout title="Dashboard">
      <Welcome />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <MonthGoals />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <MonthSale />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <LastFeedbacks />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Evaluations />
          </Paper>
        </Grid>
      </Grid>
    </PortalLayout>
  );
}
