import React from "react";

const SystemLog = ({ logs, output }) => {
  return (
    <div>
      <div className="horizontal">
        <hr className="custom-line" />
      </div>
      <div className="system-log">
        <h3>System Log</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
      <div className="output-box">
        {output || "No output available"}
      </div>
    </div>
  );
};

export default SystemLog;
