import { Grid } from "@material-ui/core";
import React from "react";

export default function FeedbackInformationHeader({
  evaluator,
  company,
  date,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4} lg={3}>
        <p>
          Avaliador: <span>Carolina Kempfer</span>
        </p>
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
        <p>
          Empresa: <span>Doce Lar</span>
        </p>
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
        <p>
          Data de Avaliação: <span>30 Jul 2021</span>
        </p>
      </Grid>
    </Grid>
  );
}
