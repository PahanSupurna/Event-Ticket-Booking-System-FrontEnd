import React, { useState } from "react";
import "./App.css";
import ParameterInput from "./Components/ParameterInput";

function App() {
const [logs, setLogs] = useState(["No logs available yet..."]);
const [socket, setSocket] = useState(null);

const handleStartProcess = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const numTickets = formData.get("totalTickets");
  const releaseRate = formData.get("releaseRate");
  const retrievalRate = formData.get("retrievalRate");
  const ticketCapacity = formData.get("maxCapacity");

  const command = `START ${numTickets} ${releaseRate} ${retrievalRate} ${ticketCapacity}`;

  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(command); // Send the START command if socket is open
  } else {
    const newSocket = new WebSocket("ws://localhost:8080/ws");
    setSocket(newSocket);

    newSocket.onopen = () => {
      newSocket.send(command); // Send START command on connection open
      console.log("WebSocket connection established.");
    };

    newSocket.onmessage = (event) => {
      setLogs((prevLogs) => [...prevLogs, event.data]); // Append logs
    };

    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  }
};

const handleStopProcess = () => {
  if (socket) {
    socket.send("STOP"); // Send STOP command
    socket.close(); // Close the WebSocket connection
    setSocket(null);
    setLogs((prevLogs) => [...prevLogs, "Simulation stopped."]);
  }
};

return (
  <div className="App">
    {/* <h1>Create Configuration</h1>
    <form onSubmit={handleStartProcess}>
      <div>
        <label>Total Tickets:</label>
        <input type="number" name="totalTickets" required />
      </div>
      <div>
        <label>Ticket Release Rate:</label>
        <input type="number" name="releaseRate" required />
      </div>
      <div>
        <label>Customer Retrieval Rate:</label>
        <input type="number" name="retrievalRate" required />
      </div>
      <div>
        <label>Max Ticket Capacity:</label>
        <input type="number" name="maxCapacity" required />
      </div>
      <div>
        <button type="submit" style={{ backgroundColor: "orange" }}>
          Start Process
        </button>
        <button
          type="button"
          onClick={handleStopProcess}
          style={{ backgroundColor: "red" }}
        >
          Stop Process
        </button>
      </div>
    </form>
    <div>
      <h2>Logs</h2>
      <textarea
        readOnly
        value={logs.join("\n")}
        style={{ width: "100%", height: "200px" }}
      />
    </div> */}
    <div>
      <ParameterInput/>
    </div>
  </div>
  );
}

export default App;
