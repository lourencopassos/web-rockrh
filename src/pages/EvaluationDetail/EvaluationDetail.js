import { Grid } from "@material-ui/core";
import React from "react";
import EvaluationCard from "../../components/EvaluationCard/EvaluationCard";
import InformationHeader from "../../components/InformationHeader/InformationHeader";
import PortalLayout from "../../layouts/portal.index";

export default function EvaluationDetail() {
  return (
    <PortalLayout title="Avaliação #1">
      <InformationHeader />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <EvaluationCard />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EvaluationCard />
        </Grid>
      </Grid>
    </PortalLayout>
  );
}
