import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
}

AllRoutes.propTypes = {
  props: PropTypes.any,
};

export default AllRoutes;
