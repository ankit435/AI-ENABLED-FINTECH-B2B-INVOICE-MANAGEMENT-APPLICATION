import React from "react";
import { fetchinvoice } from "../service/cruds";
import { HeaderTable } from "../model/invoice";
import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { sanitizeColumnName, sanitizeRowData } from "./sanitizers";

import { usePagination } from "./Provider";

export default function Display() {
  const {
    page,
    rowCount,
    setPage,
    setRowCount,
    todeleteInv,
    settodeleteInv,
    responseData,
    setResponseData,
    search,
  } = usePagination();

  //const [orderBy,setOrderBy]=React.useState(0);
  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowCount(parseInt(event.target.value), 10);
  };

  const handelsort = (item) => {
    // event.preventDefault();
    console.log(item);
  };
  React.useEffect(() => {
    fetchinvoice(page, rowCount, search).then((data) =>
      setResponseData(data == null ? [] : data)
    );
  }, [page, rowCount, search]);
  const onItemCheck = (event) => {
    if (
      typeof event.target.value !== "undefined" &&
      event.target.value != null
    ) {
      const sl_no = Number(event.target.value);
      if (!todeleteInv.includes(sl_no)) {
        settodeleteInv([...todeleteInv, sl_no]);
      } else {
        settodeleteInv(
          todeleteInv.filter((selectedinv) => {
            return selectedinv !== sl_no;
          })
        );
      }
    }
  };
  const onMasterCheck = () => {
    if (todeleteInv.length < responseData.length) {
      settodeleteInv(responseData.map(({ sl_no }) => sl_no));
    } else {
      settodeleteInv([]);
    }
  };
 

  const RenderHeader = () => (
    <TableHead>
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          inputProps={{
            "aria-label": "select all invoices",
          }}
          checked={
            responseData.length > 0 &&
            todeleteInv.length === responseData.length
          }
          onChange={onMasterCheck}
        />
      </TableCell>
      {HeaderTable.map((item, idx) => (
        <TableCell
          key={idx}
          align={"center"}
          padding={"normal"}
          //onClick={() => handelsort(item)}
        >
          {sanitizeColumnName(item.name)}
        </TableCell>
      ))}
    </TableHead>
  );

  function InvoiceTableRow({ row, isSelected }) {
    return (
      <TableRow
        hover
        onClick={onItemCheck}
        role="checkbox"
        aria-checked={todeleteInv.includes(isSelected)}
        tabIndex={-1}
        selected={todeleteInv.includes(isSelected)}
      >
        <TableCell padding="checkbox">
          <Checkbox
            value={isSelected}
            color="primary"
            checked={todeleteInv.includes(isSelected)}
            inputProps={{
              "aria-labelledby": isSelected,
            }}
          />
        </TableCell>
        {HeaderTable.map((columnName, idx) => (
          <TableCell
            key={idx}
            //component="th"
            align="center"
            scope="row"
            padding="none"
          >
            {sanitizeRowData(row[columnName.name])}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  const Renderbody = () => (
    <TableBody>
      {responseData.length > 0 &&
        responseData.map((row) => (
          <InvoiceTableRow key={row.sl_no} row={row} isSelected={row.sl_no} />
        ))}
    </TableBody>
  );

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="invoice-list"
              size={"small"}
            >
              <RenderHeader />
              <Renderbody />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={-1}
            rowsPerPage={rowCount}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
