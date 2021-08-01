import { Grid } from "@material-ui/core";
import React from "react";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import InformationHeader from "../../components/InformationHeader/InformationHeader";
import PortalLayout from "../../layouts/portal.index";

export default function FeedbackDetail() {
  return (
    <PortalLayout title="Feedback #1">
      <InformationHeader />
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <FeedbackCard feedback={[]} />
        </Grid>
      </Grid>
    </PortalLayout>
  );
}
