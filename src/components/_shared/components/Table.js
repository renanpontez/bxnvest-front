import {
  Box,
  makeStyles,
  TableContainer,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Table =  props => {
  const classes = useStyles();
  return (
    <TableContainer component={Box}>
      <Table className={classes.table}>{props.children}</Table>
    </TableContainer>
  );
};

export default Table;
