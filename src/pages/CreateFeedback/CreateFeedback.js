import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PortalLayout from "../../layouts/portal.index";

export default function CreateFeedback() {
  const useStyles = makeStyles((theme) => ({
    title: {
      width: "100%",
    },
    description: {
      height: 600,
    },
  }));

  const classes = useStyles();

  return (
    <PortalLayout title="Criar Feedback">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="title"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Título do Feedback"
            autoFocus
            className={classes.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            variant="outlined"
            fullWidth
            multiline={true}
            rows={10}
            label="Descrição"
            className={classes.description}
          />
        </Grid>
      </Grid>
    </PortalLayout>
  );
}
