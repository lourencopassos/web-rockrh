import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DoneIcon from "@material-ui/icons/Done";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../DashboardCardTitle/Title";

export default function MonthGoals() {
  const useStyles = makeStyles((theme) => ({
    completedGoal: {
      color: "#228B22",
      fontWeight: 700,
      textDecoration: "line-through",
    },
    completedIcon: {
      fontWeight: 800,
      color: "#228B22",
      paddingLeft: theme.spacing(1),
    },
    notCompletedGoal: {},
  }));

  const classes = useStyles();

  const mockGoals = [
    { goal: "Vender R$ 25.000 no mês", status: "NOT_COMPLETED" },
    {
      goal: "Conversar por 15 clientes por dia no WhatsApp",
      status: "COMPLETED",
    },
    { goal: "Arrumar a loja duas vezes por semana", status: "NOT_COMPLETED" },
    { goal: "Ajudar a nova vendedora a se ambientar", status: "NOT_COMPLETED" },
  ];

  return (
    <>
      <Title>
        Objetivos do Mês
      </Title>
      <div>
        <List>
          {mockGoals.map(({ goal, status }) => {
            return (
              <ListItem
                className={clsx(
                  classes.notCompletedGoal,
                  status === "COMPLETED" && classes.completedGoal
                )}
              >
                {goal}
                {status === "COMPLETED" && (
                  <ListItemIcon className={classes.completedIcon}>
                    <DoneIcon />
                  </ListItemIcon>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
}
