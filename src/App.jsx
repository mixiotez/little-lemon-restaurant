import { ThemeProvider } from "@mui/material/styles";
import Router from "@/Router";
import Navbar from "@/components/Navbar/Navbar";
import theme from "../theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
