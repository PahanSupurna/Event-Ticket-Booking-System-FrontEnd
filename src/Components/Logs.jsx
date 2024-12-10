import React from "react";
import "../App.css";

const Logs = ({ logs }) => {
  return (
    <div className="logs">
      <h3>Logs</h3>
      <pre>{logs || "No logs to display yet."}</pre>
    </div>
  );
};

export default Logs;
