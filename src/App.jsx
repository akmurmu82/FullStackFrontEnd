// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import AllRoutes from "./AllRoutes";
import './App.css'
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#171717">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
