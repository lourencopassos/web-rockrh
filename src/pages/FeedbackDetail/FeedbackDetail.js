import { Grid } from "@material-ui/core";
import React from "react";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import FeedbackInformationHeader from "../../components/FeedbackInformationHeader/FeedbackInformationHeader";
import PortalLayout from "../../layouts/portal.index";

export default function FeedbackDetail() {
  return (
    <PortalLayout title="Avaliação #1">
      <FeedbackInformationHeader />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <FeedbackCard />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <FeedbackCard />
        </Grid>
      </Grid>
    </PortalLayout>
  );
}
