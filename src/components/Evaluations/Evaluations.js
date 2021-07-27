import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../DashboardCardTitle/Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "01 Mai, 2021", 5, "Carolina Kempfer"),
  createData(1, "16 Mai, 2021", 4.5, "Beate Kempfer"),
  createData(2, "16 Jun, 2021", 3.7, "Beate Kempfer"),
  createData(3, "16 Jun, 2021", 4.2, "Beate Kempfer"),
  createData(4, "15 Jul, 2021", 5, "Carolina Kempfer"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Evaluations() {
  const classes = useStyles();
  return (
    <>
      <Title>Avaliações Recebidas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Média</TableCell>
            <TableCell>Autor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais avaliações
        </Link>
      </div>
    </>
  );
}
