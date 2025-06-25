import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Statistic from "./pages/Statistic";
import Inactive from "./pages/Inactive";
import SignOut from "./pages/SignOut";

import { Box, Toolbar } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />

      
      <Box component="main" sx={{ flexGrow: 1, ml: { sm: "240px" }, p: 3 }}>
        <Toolbar /> {/* Push content below the header */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/inactive" element={<Inactive />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
