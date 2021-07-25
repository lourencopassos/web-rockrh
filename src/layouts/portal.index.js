import React, { useState } from "react";
import DrawerMenu from "../components/Drawer/Drawer";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function PortalLayout({ title, children }) {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Rock RH - {title}</title>
      </Helmet>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={drawerOpen} />
      <DrawerMenu open={drawerOpen} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
}
