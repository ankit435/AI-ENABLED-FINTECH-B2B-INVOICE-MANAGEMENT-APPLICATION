import { ReactComponent as ABC } from "./Asset/ABC.svg";
import { ReactComponent as Logos } from "./Asset/logo.svg";
import { Box, Paper } from "@mui/material";
export default function Logo() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Paper sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ position: "absolute", left: "15px" }}>
          <ABC />
        </Box>
        <Box sx={{ m: "1" }}>
          <Logos />
        </Box>
      </Paper>
      <h1 style={{marginLeft:10}}>Invoice List</h1>
    </Box>
  );
}
