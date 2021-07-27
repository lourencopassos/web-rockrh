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
  createData(0, "16 Abr, 2021", "Agradecimento", "Carolina Kempfer"),
  createData(1, "17 Abr, 2021", "Parabéns pela meta batida!", "Beate Kempfer"),
  createData(
    2,
    "20 Abr, 2021",
    "Obrigada por ajudar a colega nova",
    "Beate Kempfer"
  ),
  createData(3, "26 Abr, 2021", "Adorei a tua atitude", "Beate Kempfer"),
  createData(4, "01 Abr, 2021", "Show de bola", "Carolina Kempfer"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <Title>Feedbacks Recebidos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Título</TableCell>
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
          Ver mais feedbacks
        </Link>
      </div>
    </>
  );
}
