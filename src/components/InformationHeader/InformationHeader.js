import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export default function InformationHeader({
  evaluator,
  company,
  date,
}) {
  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      borderBottom: "1px solid black",
    },
    infoLabel: {
      fontWeight: 800,
    },
    infoText: {
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={6} md={4} lg={3}>
        <p className={classes.infoLabel}>Avaliador</p>
        <span className={classes.infoText}>Carolina Kempfer</span>
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
        <p className={classes.infoLabel}>Empresa</p>
        <span className={classes.infoText}>Doce Lar</span>
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
        <p className={classes.infoLabel}>Data de Avaliação</p>
        <span className={classes.infoText}>30 Jul 2021</span>
      </Grid>
    </Grid>
  );
}
