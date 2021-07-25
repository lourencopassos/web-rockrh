import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function Welcome() {
  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      marginBottom: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  return (
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      className={classes.title}
    >
      Olá, Carolina!
    </Typography>
  );
}
