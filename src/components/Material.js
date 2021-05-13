import React, { useState } from "react";
//import "@awsui/global-styles/index.css";
import { Container, Button } from "@material-ui/core";

import {
  Paper,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import "./styles.css";
import { useStyles } from "./styles";

function createData(
  deviceName,
  description,
  DigitalsI,
  DigitalsO,
  AnalogI,
  AnalogO,
  VirtualI,
  VirtualO
) {
  return {
    deviceName,
    description,
    DigitalsI,
    DigitalsO,
    AnalogI,
    AnalogO,
    VirtualI,
    VirtualO,
  };
}

const datos = [
  createData(
    "Plantilla 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra sagittis nunc, eget tincidunt turpis vulputate vel. Integer at pellentesque eros. Cras ac eros ut turpis accumsan mattis. Cras vehicula.",
    "2",
    "3",
    "6",
    "4",
    "3",
    "7"
  ),
];

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Materialui() {
  const classes = useStyles();

  const [isinhabilited, setIsinhabilited] = useState(false);

  const handleInhabilited = (e) => setIsinhabilited(e.target.state);

  return (
    <Container>
      {datos.map((datos) => (
        <>
          <div className={classes.titleContainer}>
            <h1>{datos.deviceName}</h1>
            <Button onClick={handleInhabilited}>Deshabilitar</Button>
          </div>
          <p>{datos.description}</p>
          <h3>Parametros</h3>
          <TableContainer elevation={5} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.headerStyles}>
                    Entradas digitales
                  </TableCell>
                  <TableCell align="center" className={classes.headerStyles}>
                    Salidas digitales
                  </TableCell>
                  <TableCell align="center" className={classes.headerStyles}>
                    Entradas analogas
                  </TableCell>
                  <TableCell align="center" className={classes.headerStyles}>
                    Salidas analogas
                  </TableCell>
                  <TableCell align="center" className={classes.headerStyles}>
                    Entradas virtuales
                  </TableCell>
                  <TableCell align="center" className={classes.headerStyles}>
                    Salidas virtuales
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" className={classes.cellStyles}>
                    {datos.DigitalsI}
                  </TableCell>
                  <TableCell align="center" className={classes.cellStyles}>
                    {datos.DigitalsO}
                  </TableCell>
                  <TableCell align="center" className={classes.cellStyles}>
                    {datos.AnalogI}
                  </TableCell>
                  <TableCell align="center" className={classes.cellStyles}>
                    {datos.AnalogO}
                  </TableCell>
                  <TableCell align="center" className={classes.cellStyles}>
                    {datos.VirtualI}
                  </TableCell>
                  <TableCell align="center" className={classes.cellStyles}>
                    {datos.VirtualO}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h3>Dispositivos</h3>
          <List>
            {generate(
              <ListItem className={classes.textListStyles}>
                <ListItemIcon className={classes.iconStyles}></ListItemIcon>
                <ListItemText
                  className={classes.textListStyles}
                  primary="Dispositivo en el que es usado"
                />
              </ListItem>
            )}
          </List>
        </>
      ))}
    </Container>
  );
}
