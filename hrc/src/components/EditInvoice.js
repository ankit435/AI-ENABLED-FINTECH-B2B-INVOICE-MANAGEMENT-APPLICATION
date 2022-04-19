
import * as React from "react";
import {
  TextField,
  Button,
  DialogTitle,
  Dialog,
  DialogContent,

  DialogActions,

} from "@mui/material";

import { putsinvoice} from "../service/cruds";


export default function Editinvoice(props) {

  const { edit, setedit, open, setOpen, responseData, setResponseData } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(await putsinvoice(edit))
    {
    let newArr = [...responseData]; // copying the old datas array
    newArr[edit.index]["invoice_currency"] = edit.invoice_currency;
    newArr[edit.index]["cust_payment_terms"] = edit.cust_payment_terms //key and value
    setResponseData(newArr);
    }
    
    console.log(responseData[edit.index])
   
    
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setedit((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent >
        {/* //className={classes.root} */}
          <TextField
            variant="filled"
            name="invoice_currency"
            label="invoice Currency"
            defaultValue={edit.invoice_currency}
            style={{ margin: 10 }}
            onChange={handleChange}
            
          />
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="cust_payment_terms"
            defaultValue={edit.cust_payment_terms}
            label="customer payment term"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}  style={{ marginTop: 10, float: "left", width: 225 ,marginRight: 10}}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleClose}   style={{ marginTop: 10,marginRight: 25, float: "right", width: 225 }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
