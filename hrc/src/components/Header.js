import React from "react";
import "./Asset/App.css";
import { usePagination } from "./Provider";
import { Deleteinvoice, fetchinvoice, searchinvoice } from "../service/cruds";
import AdvSearch from "./Advance_search";
import Editinvoice from "./EditInvoice";
import AddInvoice from "./AddInvoice";
import { Box, Button, IconButton, Paper, TextField } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Delete from "./Delete";
import Logo from "./Logo";

export default function Headers() {
  const [editopen, editsetOpen] = React.useState(false);
  const [addopen, addsetOpen] = React.useState(false);
  const [searopen, searsetOpen] = React.useState(false);
  const [deletes, setdelete] = React.useState(false);

  const [edit, setedit] = React.useState({
    invoice_currency: "",
    cust_payment_terms: "",
    sl_no: null,
    index: null,
  });

  const {
    todeleteInv,
    page,
    rowCount,
    responseData,
    setResponseData,
    search,
    setsearch,
  } = usePagination();
  const delteinvoices = async (event) => {
    event.preventDefault();
    setdelete(true);
  };
  const editInvoice = (event) => {
    event.preventDefault();

    responseData.map((item, index) => {
      if (item.sl_no === todeleteInv[0]) {
        setedit((edit) => ({
          ...edit,
          sl_no: item.sl_no,
          cust_payment_terms: item.cust_payment_terms,
          invoice_currency: item.invoice_currency,
          index: index,
        }));
      }
    });

    editsetOpen(true);
  };
  const addInvoice = (event) => {
    event.preventDefault();

    addsetOpen(true);
  };
  const advsearch = (event) => {
    event.preventDefault();

    searsetOpen(true);
  };

  const handleChange = (event) => {
    setsearch(event.target.value);
  };

  const refresh = async () => {
    let data=await fetchinvoice(page, rowCount, search);
    if(data==null)
    alert("server is disconncted ! wait !")
    setResponseData(data==null?[]:data);
  };
  return (
    <>
      <Box>
        <Logo />

        <Box
          sx={{
            "& .MuiButton-root": { m: 1, width: "20ch" },
          }}
        >
          <Paper elevation={4}>
            <Button
              onClick={advsearch}
              variant="contained"
              style={{
                marginTop: 20,
                marginLeft: 10,
                float: "left",
                width: 180,
              }}
            >
              PREDICT
            </Button>
            <Button
              onClick={advsearch}
              variant="contained"
              style={{ marginTop: 20, float: "left", width: 180 }}
            >
              ANALYTITS VIEW
            </Button>
            <Button
              onClick={advsearch}
              variant="contained"
              style={{ marginTop: 20, float: "left", width: 180 }}
            >
              ADVANCE SEARCH
            </Button>
            <IconButton onClick={refresh} style={{ margin: 15 }}>
              <RefreshIcon />
            </IconButton>

            <TextField
              variant="outlined"
              name="cust_number"
              label="search customer id"
              type="number"
              defaultValue="null"
              style={{ marginTop: 10, marginLeft: 25 }}
              onChange={handleChange}
            />
            <Button
              style={{
                marginTop: 20,
                marginRight: 10,
                float: "right",
                width: 180,
              }}
              disabled={todeleteInv.length === 0}
              onClick={delteinvoices}
              variant="contained"
            >
              Delete
            </Button>

            <Button
              style={{ marginTop: 20, float: "right", width: 180 }}
              disabled={todeleteInv.length !== 1}
              onClick={editInvoice}
              variant="contained"
            >
              Edit
            </Button>
            <Button
              onClick={addInvoice}
              variant="contained"
              style={{ marginTop: 20, float: "right", width: 180 }}
            >
              Add
            </Button>

            {/* </Stack> */}
          </Paper>

          <Editinvoice
            edit={edit}
            setedit={setedit}
            open={editopen}
            setOpen={editsetOpen}
            responseData={responseData}
            setResponseData={setResponseData}
          />
        </Box>
      </Box>

      <AddInvoice open={addopen} setOpen={addsetOpen} />
      <AdvSearch
        open={searopen}
        setOpen={searsetOpen}
        responseData={responseData}
        setResponseData={setResponseData}
      />
      <Delete open={deletes} setOpen={setdelete}></Delete>
    </>
  );
}
