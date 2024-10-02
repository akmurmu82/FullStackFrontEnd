import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/LandingPage";
import DashBoard from "./components/dashboard/Dashboard";

function AllRoutes() {
  const token = JSON.parse(localStorage.getItem("authToken"));
  return (
    <Routes>
      <Route path="/" element={token ? <DashBoard /> : <LandingPage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
}

AllRoutes.propTypes = {
  props: PropTypes.any,
};

export default AllRoutes;
