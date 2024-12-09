// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ParameterInput from "./Inputs/ParameterInput";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inputs" />} />
        <Route path="/inputs" element={<ParameterInput />} />
      </Routes>
    </Router>
  );
};

export default App;
