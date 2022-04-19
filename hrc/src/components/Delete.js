
import * as React from "react";
import {

  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

import { Deleteinvoice} from "../service/cruds";
import { usePagination } from "./Provider";

export default function Delete(props) {
  
  const { todeleteInv,settodeleteInv, responseData, setResponseData } =
  usePagination();
  const {open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
        
    if ((await Deleteinvoice(todeleteInv)) != null) {
        {
          if(todeleteInv.length===responseData.length)
          {
            setResponseData([])
          }
          else
          {
          todeleteInv.map(
            (sl_no) => (
              setResponseData(
                responseData.filter((item) => item.sl_no !== sl_no)
              )
              
            )
          );
          }
          settodeleteInv([])
          
        }
      }
    setOpen(false);
  };


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Records ?</DialogTitle>
        <DialogContent >
       
        <Typography component="div" gutterBottom>
          Are you sure you want to delete these record(s)
        </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}  style={{ marginTop: 10, marginLeft:10,float: "left", width: 225 }}>
             Delete
          </Button>
          <Button variant="contained" onClick={handleClose}   style={{ marginTop: 10,marginRight: 10, float: "right", width: 225 }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
