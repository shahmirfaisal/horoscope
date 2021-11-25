import { Header } from "./components/Header/";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { NotificationContainer } from "react-notifications";
import { Home } from "./pages/Home/";
import { Horoscope } from "./pages/Horoscope/";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/";

export const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horoscope" element={<Horoscope />} />
      </Routes>

      <Footer />

      <NotificationContainer />
    </ThemeProvider>
  );
};
