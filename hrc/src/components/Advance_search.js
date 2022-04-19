
import * as React from "react";
import {
  TextField,
  Box,
  Button,
  DialogTitle,
  Dialog,
  DialogContent,

  DialogActions,

} from "@mui/material";

import { searchinvoice } from "../service/cruds";


export default function AdvSearch(props) {
  const [search, setsearch] = React.useState({});

  const { open, setOpen, setResponseData } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (search != null) {

      let ser=await searchinvoice(search);
      setResponseData(ser==null?[]:ser);

      setOpen(false);
      setsearch({});
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setsearch((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Advance Search</DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              variant="filled"
              name="doc_id"
              label="document id"
              defaultValue={search.doc_id}
              style={{ margin: 10, marginLeft: 10 }}
              onChange={handleChange}
            />
            <TextField
              variant="filled"
              style={{ margin: 10 }}
              name="invoice_id"
              defaultValue={search.invoice_id}
              label="invoice id"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <TextField
              variant="filled"
              name="cust_number"
              label="cust number"
              defaultValue={search.cust_number}
              style={{ margin: 10, marginLeft: 10 }}
              onChange={handleChange}
            />
            <TextField
              variant="filled"
              style={{ margin: 10 }}
              name="buisness_year"
              defaultValue={search.buisness_year}
              label="buisness year"
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}  style={{ marginTop: 10, float: "left", width: 225 ,marginRight: 10}}>
            Search
          </Button>
          <Button variant="contained" onClick={handleClose}   style={{ marginTop: 10,marginRight: 25, float: "right", width: 225 }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
