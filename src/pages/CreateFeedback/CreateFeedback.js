import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PortalLayout from "../../layouts/portal.index";

export default function CreateFeedback() {
  const useStyles = makeStyles((theme) => ({
    title: {
      width: "100%",
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
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large">
            Criar Feedback
          </Button>
          <TextField variant="outlined"
            name="title"
            required
            id="firstName"
            label="Feedback direcionado para quem"/> 
        </Grid>
      </Grid>
    </PortalLayout>
  );
}
