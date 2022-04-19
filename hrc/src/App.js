import { createTheme, darkScrollbar, Paper, ThemeProvider } from "@mui/material";
import { PaginationProvider } from "./components/Provider";
import  Headers from "./components/Header";
import  Display from "./components/Display";
import Footer from "./components/footer";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#2A3E4C"
        }
      }
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaginationProvider>
      <Paper style={{height:"100"}}>
        <Headers/>
        <Display/>
        <Footer/>
        </Paper>
      </PaginationProvider>
    </ThemeProvider>
  );
}

export default App;
