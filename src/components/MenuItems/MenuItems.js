import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { OutlinedFlag, StarOutline, MonetizationOn } from "@material-ui/icons";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarOutline />
      </ListItemIcon>
      <ListItemText primary="Avaliações" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Feedbacks" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MonetizationOn />
      </ListItemIcon>
      <ListItemText primary="Meta" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <OutlinedFlag />
      </ListItemIcon>
      <ListItemText primary="Objetivos" />
    </ListItem>
  </div>
);