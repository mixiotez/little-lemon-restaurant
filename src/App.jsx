import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Router from "@/Router";
import Navbar from "@/components/Navbar/Navbar";

import theme from "../theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container
        maxWidth={false}
        disableGutters
        component="main"
        sx={{ pt: { xs: "72px", md: "80px" } }}
      >
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
