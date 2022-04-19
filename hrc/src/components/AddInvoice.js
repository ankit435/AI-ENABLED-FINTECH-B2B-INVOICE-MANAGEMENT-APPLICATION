import { Box, Button, Divider, Input, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { addFields } from "../model/invoice";
import { addinvoice } from "../service/cruds";
import { sanitizeAddFieldName } from "./sanitizers";

const outerBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "#2A3E4C",
  border: "2px solid #2A3E4C",
  boxShadow: 24,
  p: 4,
};
export default function AddInvoice(props) {
  const [inputs, setInputs] = useState({});
  const { open, setOpen } = props;
  let separator = "-";
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const dates = `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleClose = (event) => {
    setOpen(false)
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (await addinvoice(inputs)!=null) {
      setInputs({})
      console.log("Added");
      alert("Inserted")
    }
    else
    alert("opps ! error")
    setOpen(false);
  };
  return (
    <Modal open={open} aria-labelledby="add-data" onClose={handleClose}>
      <Box sx={outerBoxStyle}>
        <h1 style={{marginLeft:15,color:"white"}}>Add</h1>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="business_code"
            label="business code"
            defaultValue={inputs.business_code}
            inputProps={{ maxLength: 10 }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            type="number"
            style={{ margin: 10 }}
            defaultValue={inputs.cust_number}
            inputProps={{ maxLength: 11 }}
            name="cust_number"
            label="cust Number"
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            name="clear_date"
            style={{ margin: 10 }}
            label="Clear Date"
            defaultValue={dates}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            name="buisness_year"
            style={{ margin: 10 }}
            label="Buisness Year"
            defaultValue={year}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="doc_id"
            label="Doc Id"
            defaultValue={inputs.doc_id}
            inputProps={{ maxLength: 10 }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="posting_date"
            label="posting date"
            defaultValue={dates}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />

          <TextField
            variant="filled"
            name="document_create_date"
            style={{ margin: 10 }}
            label="document create date"
            defaultValue={dates}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="due_in_date"
            label="due_in_date"
            defaultValue={dates}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="document_type"
            label="document type"
            defaultValue={inputs.document_type}
            inputProps={{ maxLength: 5 }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            name="invoice_currency"
            label="invoice Currency"
            style={{ margin: 10 }}
            defaultValue={inputs.invoice_currency}
            inputProps={{ maxLength: 5 }}
            onChange={handleChange}
          />
          <TextField
            type="number"
            variant="filled"
            name="posting_id"
            style={{ margin: 10 }}
            defaultValue={inputs.posting_id}
            label="posting_id"
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            type="number"
            name="total_open_amount"
            defaultValue={inputs.total_open_amount}
            style={{ margin: 10 }}
            label="total open amount"
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            variant="filled"
            name="baseline_create_date"
            label="baseline create date"
            style={{ margin: 10 }}
            defaultValue={dates}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            style={{ margin: 10 }}
            name="cust_payment_terms"
            label="customer payment term"
            defaultValue={inputs.cust_payment_terms}
            inputProps={{ maxLength: 5 }}
            onChange={handleChange}
          />
          <TextField
            variant="filled"
            label="invoice id"
            style={{ margin: 10 }}
            defaultValue={inputs.invoice_id}
            inputProps={{ maxLength: 11 }}
            name="invoice_id"
            type="number"
            onChange={handleChange}
          />
        </Box>

        <Divider variant="middle" />

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ marginLeft: 10, marginTop: 20, float: "left", width: 425 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          style={{ marginRight: 20, marginTop: 20, float: "right", width: 425 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}
