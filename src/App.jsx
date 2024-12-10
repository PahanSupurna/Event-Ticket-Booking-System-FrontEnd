import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ConfigurationForm from "./Components/ConfigurationForm";
import Controls from "./Components/Controls";
import SystemLog from "./Components/SystemLog";
import "./App.css";

function App() {
  const [config, setConfig] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    vendorCount: "",
  });

  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (
      !config.totalTickets ||
      !config.ticketReleaseRate ||
      !config.customerRetrievalRate ||
      !config.vendorCount
    ) {
      alert("Please fill all fields with positive numbers.");
      return;
    }
    setIsRunning(true);
    logMessage(
      `Ticket Exchange initialized. Total Tickets: ${config.totalTickets}, Release Rate: ${config.ticketReleaseRate}/min, Retrieval Rate: ${config.customerRetrievalRate}/min, Max Ticket Count: ${config.maxTicketCount}`
    );
  };

  const handleStop = () => {
    setIsRunning(false);
    logMessage("Simulation halted. System resources released.");
  };

  const logMessage = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [`[${timestamp}] ${message}`, ...prevLogs]);
  };

  const updateConfig = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
      <div className="content">
      <h1 className="page-title">Real-Time Event Ticketing System</h1>

        <ConfigurationForm config={config} updateConfig={updateConfig} />
        <Controls onStart={handleStart} onStop={handleStop} isRunning={isRunning} />
        <SystemLog logs={logs} />
      </div>
  );
}

export default App;
