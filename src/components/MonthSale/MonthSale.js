import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { monthPicker } from "../../utils/month-picker";
import Title from "../DashboardCardTitle/Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const today = new Date();
const currentMonth = monthPicker(today.getUTCMonth());
const currentYear = today.getFullYear();

export default function MonthSale() {
  const classes = useStyles();
  return (
    <>
      <Title>Venda Mensal</Title>
      <Typography component="p" variant="h4">
        R$ 3.124,20
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        em {`${currentMonth} de ${currentYear}`}
      </Typography>
      <div>
        <Link color="primary" href="#">
          Ver mais informações
        </Link>
      </div>
    </>
  );
}
