import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes: React.FC = () => {
  const isAuthenticated = true; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* محمية */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />

        {/* صفحة غير موجودة */}
        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
