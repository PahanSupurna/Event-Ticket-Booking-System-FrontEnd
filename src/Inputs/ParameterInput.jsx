import React, { useState, useEffect } from "react";

const ParameterInput = () => {
  const [formData, setFormData] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
  });

  const [logs, setLogs] = useState([]); // State for storing server logs

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStartProcess = () => {
    alert("Starting Process with Data: " + JSON.stringify(formData, null, 2));
  };

  const handleStopProcess = () => {
    alert("Process Stopped.");
    setFormData({
      totalTickets: "",
      ticketReleaseRate: "",
      customerRetrievalRate: "",
      maxTicketCapacity: "",
    });
  };

  useEffect(() => {
    // Polling logic to fetch logs
    const interval = setInterval(() => {
      fetch("http://localhost:8080/logs") // Endpoint for fetching logs
        .then((response) => response.json())
        .then((data) => setLogs(data))
        .catch((error) => console.error("Error fetching logs", error));
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Configuration</h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label>Total Tickets</label>
            <input
              type="text"
              name="totalTickets"
              value={formData.totalTickets}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Ticket Release Rate</label>
            <input
              type="text"
              name="ticketReleaseRate"
              value={formData.ticketReleaseRate}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Customer Retrieval Rate</label>
            <input
              type="text"
              name="customerRetrievalRate"
              value={formData.customerRetrievalRate}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Max Ticket Capacity</label>
            <input
              type="text"
              name="maxTicketCapacity"
              value={formData.maxTicketCapacity}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Start Process and Stop Process Buttons */}
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={handleStartProcess}
              style={{
                background: "#ff5722",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                width: "48%",
              }}
            >
              Start Process
            </button>
            <button
              type="button"
              onClick={handleStopProcess}
              style={{
                background: "#dc3545",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                width: "48%",
              }}
            >
              Stop Process
            </button>
          </div>
        </form>

        {/* Log Box Section */}
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#333",
            color: "#f5f5f5",
            border: "1px solid #555",
            borderRadius: "5px",
            height: "200px",
            overflowY: "auto",
          }}
        >
          <h4 style={{ textAlign: "center", marginBottom: "10px" }}>Logs</h4>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <div key={index} style={{ fontSize: "12px", marginBottom: "5px" }}>
                {log}
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", fontStyle: "italic" }}>No logs available yet...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParameterInput;
